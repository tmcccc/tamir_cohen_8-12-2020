const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  sender: {
    type: String,
    required: [true, 'message must have a sender'],
    trim: true,
    maxlength: [40, 'sender Id is to long'],
  },
  reciver: {
    type: String,
    required: [true, 'message must have reciver'],
    trim: true,
    maxlength: [40, 'reciver Id is to long'],
  },
  subject: {
    type: String,
    maxlength: [40, 'subject cant exceed 60 chars'],
    required: [true, 'message must have a subject'],
  },
  message: {
    type: String,
    maxlength: [150, 'message cant exceed 150 chars'],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Message = mongoose.model('Post', messageSchema);

module.exports = Message;
