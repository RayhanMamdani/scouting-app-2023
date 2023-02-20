module.exports = app => {
    const Teams = require("../controllers/controller.js");
  
    var router = require("express").Router();
  
    // Create a new Team
    router.post("/", Teams.create);
  
    // Retrieve all Teams
    router.get("/", Teams.findAll);
  
    // Retrieve all published Teams
    router.get("/published", Teams.findAllPublished);
  
    // Retrieve a single Team with id
    router.get("/:id", Teams.findOne);
  
    // Update a Team with id
    router.put("/:id", Teams.update);
  
    // Delete a Team with id
    router.delete("/:id", Teams.delete);
  
    // Delete all Teams
    router.delete("/", Teams.deleteAll);
  
    app.use('/api/Teams', router);
  };