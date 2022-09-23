const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  storeId: {
    type: String,
    required: true,
  },
  storeName: {
    type: String,
    required: true,
  },
  registeredNo: {
    type: String,
    required: true,
  },
  ownersName: {
    type: String,
    required: true,
  },
  contactNo: {
    type: Number,
    required: true,
  },
  storeAddress: {
    type: String,
    required: true,
  },
  storeProvince: {
    type: String,
    required: true,
  },
  storeCity: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  storePicture: {
    type: String,
    required: true,
  },
  storeCover: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Restaurant = mongoose.model("restaurants", restaurantSchema);
module.exports = Restaurant;
