module.exports = app => {
    const Matches = require("../controllers/matchController.js");
  
    var router = require("express").Router();
  
    // Create a new Match
    router.post("/", Matches.create);
  
    // Retrieve all Matches
    router.get("/", Matches.findAll);
  
    // Retrieve all published Matches
    router.get("/published", Matches.findAllPublished);
  
    // Retrieve a single Match with id
    router.get("/:id", Matches.findOne);
  
    // Update a Match with id
    router.put("/:id", Matches.update);
  
    // Delete a Match with id
    router.delete("/:id", Matches.delete);
  
    // Delete all Matches
    router.delete("/", Matches.deleteAll);

    app.use('/api/Matches', router);

   
  };