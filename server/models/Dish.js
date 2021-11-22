const mongoose = require("mongoose");

const newDishSchema = new mongoose.Schema({
  storeId: {
    type: String,
    required: true,
  },
  dishName: {
    type: String,
    required: true,
  },
  category: {
    type: Number,
    required: true,
  },
  hours: {
    type: String,
  },
  ingredients: {
    type: Array,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  dishPicture: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const newDish = mongoose.model("dishes", newDishSchema);
module.exports = newDish;
