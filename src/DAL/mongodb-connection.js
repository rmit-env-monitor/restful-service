const mongoose = require("mongoose");
const { MONGO_URL, NODE_ENV } = require("../../env");

mongoose.connect(MONGO_URL, { useMongoClient: true });
mongoose.Promise = global.Promise;
mongoose.set("debug", NODE_ENV !== "production");
