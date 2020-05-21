// const mongoose = require('mongoose')
// require('dotenv').config()
// // 'mongodb+srv://test:test@cluster0-pkpol.mongodb.net/test?retryWrites=true&w=majority'mongodb+srv://test:<password>@cluster0-pkpol.mongodb.net/test?retryWrites=true&w=majority
// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true
// }).then(
//   console.log('Mongodb Connected', process.env.MONGODB_URI)
// )


const mongoose = require('mongoose');
require("dotenv").config();
const MongoDBErrors = require("mongoose-mongodb-errors");

mongoose.Promise = global.Promise;
mongoose.plugin(MongoDBErrors);
mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true
    // UseMongoClient: true
})
.then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));
