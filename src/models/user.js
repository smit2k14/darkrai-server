const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    maxlength: 20,
    unique: true,
  },
  ghostPassword: {
    type: String,
    required: true,
  },
  lastActive: {
    type: Date,
    required: true,
  },
})

module.exports = mongoose.model('User', userSchema)
