const uuid = require("uuid");
const express = require("express");
const mongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
var multer = require("multer");
const cors = require("cors");
const XLSX = require("xlsx");
const path = require("path");
var generator = require("generate-password");

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "public")));

const url =
  "mongodb+srv://admin:vBax6rFN@cluster0.ynlxy.mongodb.net/enventore?retryWrites=true&w=majority";

mongoClient.connect(url, (err, db) => {
  if (err) {
    console.log("Error When Connecting to Mongo Database");
  } else {
    console.log("Database Connection is Successful");

    const database = db.db("enventore");

    const logincollection = database.collection("logins");
    const restaurantcollection = database.collection("restaurants");
    const dishcollection = database.collection("dishes");
    const tagscollection = database.collection("tags");
    const ratingcollection = database.collection("ratings");
    const usercollection = database.collection("users");

    app.post("/register", (req, res) => {
      var userid = uuid.v4();
      const user = {
        userId: userid,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        contactNo: req.body.contactNo,
        physicalCondition: req.body.physicalCondition,
        dietary: req.body.dietary,
      };

      const userlogin = {
        userId: userid,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        type: 3,
      };

      usercollection.insertOne(user, (err, result) => {
        if (err) {
          res.send(err);
        } else {
          logincollection.insertOne(userlogin, (err, result) => {
            if (err) {
              res.send(err);
            } else {
              console.log("New User Saved Successfull");
              res.status(200).send(JSON.stringify(userlogin));
            }
          });
          console.log("New User Saved Successfull");
        }
      });
    });

    app.post("/loginapp", (req, res) => {
      logincollection.findOne({ email: req.body.email }, (err, user) => {
        if (user) {
          if (req.body.password === user.password) {
            res.status(200).send(JSON.stringify(user));
            console.log("Login Successfull");
          } else {
            res.send({ message: "Password didn't match" });
            console.log("Password didn't match");
          }
        } else {
          res.send({ message: "User not registered" });
          console.log("User not registered");
        }
      });
    });

    app.post("/login", (req, res) => {
      const { email, password } = req.body;
      logincollection.findOne({ email: email }, (err, user) => {
        if (user) {
          if (password === user.password) {
            res.send({ message: "Login Successfull", user: user });
            console.log("Login Successfull");
          } else {
            res.send({ message: "Password didn't match" });
            console.log("Password didn't match");
          }
        } else {
          res.send({ message: "User not registered" });
          console.log("User not registered");
        }
      });
    });

    var storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, "./../client/public/images/restaurants");
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
      },
    });

    var password = generator.generate({
      length: 10,
      numbers: true,
    });

    var upload = multer({ storage: storage });
    app.post(
      "/addRestaurant",
      upload.single("file"),
      async (req, res, next) => {
        const restaurant = {
          storeId: req.body.storeId,
          storeName: req.body.storeName,
          registeredNo: req.body.registeredNo,
          ownersName: req.body.ownersName,
          contactNo: req.body.contactNo,
          storeAddress: req.body.storeAddress,
          storeProvince: req.body.storeProvince,
          storeCity: req.body.storeCity,
          email: req.body.email,
          storePicture: req.file.filename,
          storeCover: req.body.storeCover,
          description: req.body.description,
        };

        const restaurantuser = {
          userId: req.body.storeId,
          name: req.body.storeName,
          email: req.body.email,
          password: password,
          type: 2,
        };

        restaurantcollection.insertOne(restaurant, (err, result) => {
          if (err) {
            res.send(err);
          } else {
            logincollection.insertOne(restaurantuser, (err, result) => {
              if (err) {
                res.send(err);
              } else {
                console.log("Restaurant Login Saved Successfull");
                res.send({ message: "Restaurant Added Successful" });
              }
            });
            console.log("Restaurant Saved Successfull");
          }
        });
      }
    );

    app.post("/addNewDish", upload.single("file"), async (req, res, next) => {
      const dish = {
        dishId: req.body.dishId,
        storeId: req.body.storeId,
        dishName: req.body.dishName,
        category: req.body.dishCategory,
        hours: req.body.dishAvailableHours,
        ingredients: req.body.dishIngredients,
        type: req.body.dishType,
        price: req.body.dishPrice,
        dishPicture: req.file.filename,
        description: req.body.description,
        genre: req.body.genre,
      };

      dishcollection.insertOne(dish, (err, result) => {
        if (err) {
          res.send(err);
        } else {
          console.log("New Dish Added Successful");
          res.send({ message: "New Dish Added Successful" });
        }
      });
    });

    app.get("/viewdishes", async (req, res) => {
      const storeId = req.query.storeId;
      dishcollection.find({ storeId: storeId }).toArray((err, results) => {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
      });
    });

    app.get("/viewalldishes", async (req, res) => {
      dishcollection.find().toArray((err, results) => {
        if (err) {
          console.log(err);
          res.send(err);
        } else {
          res.send(results);
        }
      });
    });

    app.get("/viewrestaurants", async (req, res) => {
      restaurantcollection.find().toArray((err, results) => {
        if (err) {
          console.log(err);
          res.send(err);
        } else {
          res.send(results);
        }
      });
    });

    app.post("/exportdata", (req, res) => {
      var dishbook = XLSX.utils.book_new();
      var ratingbook = XLSX.utils.book_new();
      var tagbook = XLSX.utils.book_new();

      dishcollection.find().toArray((disherr, dishdata) => {
        if (disherr) {
          console.log(disherr);
        } else {
          var tempdish = JSON.stringify(dishdata);
          tempdish = JSON.parse(tempdish);
          var dishsheet = XLSX.utils.json_to_sheet(tempdish);
          var downdish = __dirname + "/public/dishes.xlsx";
          XLSX.utils.book_append_sheet(dishbook, dishsheet, "sheet1");
          XLSX.writeFile(dishbook, downdish);
          res.download(downdish);
        }
      });

      ratingcollection.find().toArray((ratingerr, ratingdata) => {
        if (ratingerr) {
          console.log(ratingerr);
        } else {
          var temprating = JSON.stringify(ratingdata);
          temprating = JSON.parse(temprating);
          var ratingsheet = XLSX.utils.json_to_sheet(temprating);
          var downratings = __dirname + "/public/ratings.xlsx";
          XLSX.utils.book_append_sheet(ratingbook, ratingsheet, "sheet2");
          XLSX.writeFile(ratingbook, downratings);
          res.download(downratings);
        }
      });

      tagscollection.find().toArray((tagerr, tagdata) => {
        if (tagerr) {
          console.log(tagerr);
        } else {
          var temptag = JSON.stringify(tagdata);
          temptag = JSON.parse(temptag);
          var tagsheet = XLSX.utils.json_to_sheet(temptag);
          var downtags = __dirname + "/public/tags.xlsx";
          XLSX.utils.book_append_sheet(tagbook, tagsheet, "sheet3");
          XLSX.writeFile(tagbook, downtags);
          res.download(downtags);
        }
      });
    });
  }
});

app.listen(3001, () => {
  console.log("Server running on port 3001...");
});
