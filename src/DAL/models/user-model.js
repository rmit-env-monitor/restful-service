const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    username: String,
    password: String,
    email: String,
    authType: String
  },
  {
    collection: "users"
  }
);
module.exports = mongoose.model("users", schema);
