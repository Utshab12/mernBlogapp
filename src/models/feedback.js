const mongoose = require('mongoose')

const feedbackSchema = mongoose.Schema({
  
  comments: {
    type: String,
    trim : true,
    validate(val){
      if(val.length>500){
        throw new Error('Comments must be less then 500 characters!')
      }
    }
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  package: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
  
})

const Feedback = mongoose.model('Feedback', feedbackSchema)
module.exports = Feedback
