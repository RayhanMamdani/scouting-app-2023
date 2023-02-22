module.exports = mongoose => {
    const Match = mongoose.model(
      "match",
      mongoose.Schema(
        {
            // PUT WHATEVER MATCH DATA WE NEED IN HERE !!! 
          matchNum: Number,
          teamNum: Number,
          community: Boolean,
          autoCS: String,
          gpTotal: Number,
          gpAutoTotal: Number,
          gpTeleopTotal: Number,
          gpAutoScore: Number,
          gpTeleopScore: Number,
          gpTotalScore: Number,
          autoStartPos: String,
          pickupType: String,
          autoPickupPos: String,
          CSCycle: Boolean,
          endgameStartTime: String,
          endgameCS: String,
        },
        { timestamps: true }
      )
    );
  
    return Match;
  };