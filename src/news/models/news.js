
const mongoose = require('mongoose');
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  id: String, // Optional field
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: [{type: string}],
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updatedAt: String, // Change this to Date if updatedAt is meant to be a timestamp
});

const User = mongoose.model('User', userSchema);
export default User;


