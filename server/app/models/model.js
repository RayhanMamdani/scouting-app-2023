module.exports = mongoose => {
    const Match = mongoose.model(
      "match",
      mongoose.Schema(
        {
            // PUT WHATEVER MATCH DATA WE NEED IN HERE !!!
          title: String,
          description: String,
          published: Boolean
        },
        { timestamps: true }
      )
    );
  
    return Match;
  };