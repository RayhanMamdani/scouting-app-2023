const mongoose = require('mongoose');

require('dotenv').config(); 
const connectionString = `mongodb+srv://bjgattaca:${process.env.MONGODB_PASSWORD}@cluster0.lznfbqq.mongodb.net/?retryWrites=true&w=majority`;


  mongoose.set("strictQuery", false);

  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    UseUnifiedTopology: true,
}).then(() => console.log('DB connected')).catch((err) => console.log(err))
