const uuid = require("uuid");
const express = require("express");
const mongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
var multer = require("multer");
const cors = require("cors");
const XLSX = require("xlsx");
const path = require("path");
const fs = require("fs");
const Json2csvParser = require("json2csv").Parser;
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
    const complaintcollection = database.collection("complaints");
    const ordercollection = database.collection("orders");

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

    app.get("/loadFoods", async (req, res) => {
      dishcollection
        .find({})
        .project({
          _id: 0,
          __v: 0,
          type: 0,
        })
        .toArray((err, results) => {
          if (err) {
            console.log(err);
            res.send(err);
          } else {
            console.log("API called and Successfull");
            res.status(200).send(JSON.stringify(results));
          }
        });
    });

    app.post("/order", (req, res) => {
      var count = Object.keys(req.body.orderList).length;
      var ordersList = [];
      ordersList = req.body.orderList;

      for (let i = 0; i < count; i++) {
        const order = {
          orderId: uuid.v4(),
          userId: ordersList[i].userId,
          dishId: ordersList[i].product.dishId,
          dishName: ordersList[i].product.dishName,
          storeId: ordersList[i].product.storeId,
          dishPicture: ordersList[i].product.dishPicture,
          quantity: ordersList[i].quantity,
          rated: false,
        };

        ordercollection.insertOne(order, (err, result) => {
          if (err) {
            res.send(err);
          } else {
            console.log("Order is Placed Successfully");
          }
        });
      }
      console.log("All Orders are Placed Successfully");
      res.status(200).send();
    });

    app.post("/rateFood", (req, res) => {
      var upOrderId = req.body.review.orderId;

      const rate = {
        userId: req.body.review.userId,
        dishId: req.body.review.dishId,
        rating: req.body.review.rating,
      };

      ratingcollection.insertOne(rate, (err, result) => {
        if (err) {
          res.send(err);
        } else {
          ordercollection.updateOne(
            { orderId: upOrderId },
            { $set: { rated: true } },
            (err, result) => {
              if (err) {
                console.log("update rating collection failed");
              } else {
                console.log("changed order collection passed");
              }
            }
          );

          console.log("Rated Successfull");
          res.status(200).send(JSON.stringify(result));
        }
      });
    });

    app.post("/getOrders", async (req, res) => {
      ordercollection
        .find({ userId: req.body.userId, rated: false })
        .toArray((err, results) => {
          if (err) {
            console.log(err);
            res.send(err);
          } else {
            console.log("Got Previous Orders");
            res.status(200).send(JSON.stringify(results));
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
        cb(null, "./public/images/restaurants");
        // cb(null, "./../client/public/images/restaurants");
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
          res.send(results);
        }
      });
    });

    app.get("/viewcomplaints", async (req, res) => {
      const storeId = req.query.storeId;
      complaintcollection.find({}).toArray((err, results) => {
        if (err) {
          res.send(err);
        } else {
          res.send(results);
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

      dishcollection
        .find({})
        .project({
          _id: 0,
          dishId: 1,
          dishName: 1,
          genre: 1,
        })
        .toArray((disherr, dishdata) => {
          if (disherr) {
            console.log(disherr);
          } else {
            const json2csvParser = new Json2csvParser({ header: true });
            const csvData = json2csvParser.parse(dishdata);

            var tempdowndish = __dirname + "/public/dishes.csv";
            fs.writeFile(tempdowndish, csvData, function (error) {
              if (error) throw error;
            });
          }
        });

      ratingcollection
        .find({})
        .project({
          _id: 0,
          userId: 1,
          dishId: 1,
          rating: 1,
          timestamp: 1,
        })
        .toArray((ratingerr, ratingdata) => {
          if (ratingerr) {
            console.log(ratingerr);
          } else {
            const json2csvParser = new Json2csvParser({ header: true });
            const csvData = json2csvParser.parse(ratingdata);
            var downratings = __dirname + "/public/ratings.csv";
            fs.writeFile(downratings, csvData, function (ratingerr) {
              if (ratingerr) throw ratingerr;
            });
          }
        });

      tagscollection
        .find({})
        .project({
          _id: 0,
          userId: 1,
          dishId: 1,
          tag: 1,
          timestamp: 1,
        })
        .toArray((tagerr, tagdata) => {
          if (tagerr) {
            console.log(tagerr);
          } else {
            const json2csvParser = new Json2csvParser({ header: true });
            const csvData = json2csvParser.parse(tagdata);
            var downtags = __dirname + "/public/tags.csv";
            fs.writeFile(downtags, csvData, function (tagerr) {
              if (tagerr) throw tagerr;
            });
          }
        });
    });
  }
});

app.listen(3001, () => {
  console.log("Server running on port 3001...");
});
