const mongoose = require("mongoose");
const { MONGO_URL } = require("../../env");

mongoose.connect(MONGO_URL, { useMongoClient: true });
mongoose.Promise = global.Promise;
mongoose.set("debug", true);
