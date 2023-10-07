const mongoose = require('mongoose');

require('dotenv').config(); 
mongoose.set('strictQuery', false);
module.exports = {
url:  `mongodb+srv://bjgattaca:${process.env.MONGODB_PASSWORD}@cluster0.lznfbqq.mongodb.net/?retryWrites=true&w=majority`

};