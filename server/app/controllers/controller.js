const db = require("../models");
const Match = db.matches;

// Create and Save a new Match
exports.create = (req, res) => {
  // Validate request
  if (!req.body.teamNum) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Match (CHANGE MATCH DATA PARAMS HERE)
  const match = new Match({
    matchNum: req.body.matchNum,
    teamNum: req.body.teamNum,
    community: req.body.community,
    autoCS: req.body.autoCS,
    gpTotal: req.body.gpTotal,
    gpAutoTotal: req.body.gpAutoTotal,
    gpTeleopTotal: req.body.gpTeleopTotal,
    gpAutoScore: req.body.gpAutoScore,
    gpTeleopScore: req.body.gpTeleopScore,
    gpTotalScore: req.body.gpTotalScore,
    autoStartPos: req.body.autoStartPos,
    pickupType: req.body.pickupType,
    autoPickupPos: req.body.autoPickupPos,
    CSCycle: req.body.CSCycle,
    endgameStartTime: req.body.endgameStartTime,
    estCycleTime: req.body.estCycleTime,
    endgameCS: req.body.endgameCS,
    defence: req.body.defence,
    defenceType: req.body.defenceType,
    scoutName: req.body.scoutName,
    win: req.body.win,
    comments: req.body.comments
  });

  // Save Match in the database
  match
    .save(match)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Match."
      });
    });
};

// Retrieve all Matches from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
  
    Match.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Matches."
        });
      });
};

// Find a single Match with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Match.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Match with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Match with id=" + id });
      });
};

// Update a Match by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
    
      const id = req.params.id;
    
      Match.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update Match with id=${id}. Maybe Match was not found!`
            });
          } else res.send({ message: "Match was updated successfully." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Match with id=" + id
          });
        });
};

// Delete a Match with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Match.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Match with id=${id}. Maybe Match was not found!`
          });
        } else {
          res.send({
            message: "Match was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Match with id=" + id
        });
      });
};

// Delete all Matches from the database.
exports.deleteAll = (req, res) => {
    Match.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Matches were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Matches."
      });
    });
};

// Find all published Matches
exports.findAllPublished = (req, res) => {
    Match.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Matches."
      });
    });
};