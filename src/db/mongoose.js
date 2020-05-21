const mongoose = require('mongoose')
require('dotenv').config()
// 'mongodb+srv://test:test@cluster0-pkpol.mongodb.net/test?retryWrites=true&w=majority'mongodb+srv://test:<password>@cluster0-pkpol.mongodb.net/test?retryWrites=true&w=majority
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(
  console.log('Mongodb Connected', process.env.MONGODB_URI)
)