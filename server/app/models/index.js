const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.matches = require("./matchModel.js")(mongoose);
db.teams = require("./teamModel.js")(mongoose);

module.exports = db;