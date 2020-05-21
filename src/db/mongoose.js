const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(
  console.log('Mongodb Connected', process.env.MONGODB_URI)
)


