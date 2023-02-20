module.exports = mongoose => {
    const Team = mongoose.model(
      "team",
      mongoose.Schema(
        {
            // PUT WHATEVER MATCH DATA WE NEED IN HERE !!! 
            // will likely also end up needing pickup type, scout name, endgame chargestation, defense, win(?), rp gained(?), and endgame comments
          teamNumber: Number,
          matchNumber: Number,
          gameState: String,
          community: Boolean,
          chargestation: String,
          gpTotal: Number,
          gpScore: Array
        },
        { timestamps: true }
      )
    );
  
    return Team;
  };