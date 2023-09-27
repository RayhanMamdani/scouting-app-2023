const dbConfig = require("../config/db.config.js");
const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.matches = require("./matchModel.js")(mongoose);
db.teams = require("./teamModel.js")(mongoose);

module.exports = db;