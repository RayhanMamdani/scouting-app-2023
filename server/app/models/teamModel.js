module.exports = mongoose => {
    const Team = mongoose.model(
      "team",
      mongoose.Schema(
        {
            // PUT WHATEVER TEAM DATA WE NEED IN HERE !!! 
            teamNum: Number,
            modeCommunity: Boolean,
            modeAutoCS: String,
            avgGpTotal: Number,
            avgGpAutoTotal: Number,
            avgGpTeleopTotal: Number,
            avgGpAutoScore: Number,
            avgGpTeleopScore: Number,
            avgGpTotalScore: Number,
            modeAutoStartPos: String,
            modePickupType: String,
            modeAutoPickupPos: String,
            avgEndgameStartTime: String,
            avgEstCycleTime: String,
            modeEndgameCS: String,
            modeDefence: String,
            modeDefenceType: String,
            modeCSCycle: Boolean,
            modeWin: Boolean,
        },
        { timestamps: true }
      )
    );
  
    return Team;
  };