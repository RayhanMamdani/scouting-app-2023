module.exports = mongoose => {
    const Team = mongoose.model(
      "team",
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
  
    return Team;
  };