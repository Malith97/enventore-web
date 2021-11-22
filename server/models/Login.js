const mongoose = require("mongoose");

const newLoginSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  type: {
    type: Number,
    required: true,
  },
});

const newLogin = mongoose.model("logins", newLoginSchema);
module.exports = newLogin;
