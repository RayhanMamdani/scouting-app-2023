const db = require("../models");
const Team = db.teams;

// Create and Save a new Team
exports.create = (req, res) => {
  // Validate request
  if (!req.body.teamNumber) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Team (CHANGE MATCH DATA PARAMS HERE)
  const team = new Team({
    teamNumber: req.body.teamNumber,
    matchNumber: req.body.matchNumber,
    gameState: req.body.gameState,
    community: req.body.community,
    chargestation: req.body.chargestation,
    gpTotal: req.body.gpTotal,
    gpScore: req.body.gpScore
  });

  // Save Team in the database
  team
    .save(team)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Team."
      });
    });
};

// Retrieve all Teams from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
  
    Team.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Teams."
        });
      });
};

// Find a single Team with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Team.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Team with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Team with id=" + id });
      });
};

// Update a Team by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
    
      const id = req.params.id;
    
      Team.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update Team with id=${id}. Maybe Team was not found!`
            });
          } else res.send({ message: "Team was updated successfully." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Team with id=" + id
          });
        });
};

// Delete a Team with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Team.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Team with id=${id}. Maybe Team was not found!`
          });
        } else {
          res.send({
            message: "Team was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Team with id=" + id
        });
      });
};

// Delete all Teames from the database.
exports.deleteAll = (req, res) => {
    Team.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Teames were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Teames."
      });
    });
};

// Find all published Teames
exports.findAllPublished = (req, res) => {
    Team.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Teames."
      });
    });
};