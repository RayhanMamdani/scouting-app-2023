module.exports = mongoose => {
    const Match = mongoose.model(
      "FOPCmatch",
      mongoose.Schema(
        {
            // PUT WHATEVER MATCH DATA WE NEED IN HERE !!! 
          matchNum: Number,
          matchSide: String,
          teamNum: Number,
          community: Boolean,
          autoCS: String,
          autoScore: Number,
          
          gpTotal: Number,
          gpAutoTotal: Number,
          gpTeleopTotal: Number,
          gpAutoScore: Number,
          gpTeleopScore: Number,
          gpTotalScore: Number,
          autoStartPos: String,

          pickupType: [String],
          autoPickupPos: [String], 
          
          CSCycle: Boolean,
          endgameStartTime: Number,
          estCycleTime: Number,
          endgameCS: String,
          defence: String,
          defenceType: String,
          scoutName: String,
          win: Boolean,
          comments: String
        },
        { timestamps: true },
        { typeKey: '$type' }
      )
    );

    
    return Match;
  };