const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('./src/db/mongoose')
const UserRouter = require('./src/routers/User')
const BlogRouter = require('./src/routers/Blogs')
const FeedbackRouter = require('./src/routers/Feedback')

const app = express()
//port address
const port = process.env.PORT || 5000

// app.use(express.json())
app.use(cors());
app.options('*', cors());

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(UserRouter)
app.use(BlogRouter)
app.use(FeedbackRouter)
app.use('/images', express.static('images'))

//server start
app.listen(port, ()=>{
  console.log(`Server is working on port ${port}`)
})
