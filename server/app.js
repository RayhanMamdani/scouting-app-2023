const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = __dirname + '/';
const p = require('path');
const app = express();
app.use(express.static(path));

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// get frontend
app.get('/', function (req,res) {
    res.sendFile(path + "index.html");
  });

require("./app/routes/matchRoutes")(app);
require("./app/routes/teamRoutes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });


  app.get('/*', function(req, res) {
    res.sendFile(p.join(__dirname, '/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })