
import mongoose from 'mongoose';


/** consists:
 * fullName,
 * email,
 * password,
 * preferences,
 * created,
 * updated
 * */ 
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Name is required'] 
   },
   email: {
    type: String,
    unique: [true, 'Account with this email already exists, try login.'],
    lowercase: true,
    trim: true,
    required: [true, 'Email is required.'],
    validate: {
        validator: function (v) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: 'Invalid email address.'
    }
   },
   password: {
    type: String,
    required: [true, "Password not required"]
   },
   preferences: {
    category: {
        type: [String],
        required: [true, "Atleast one preference is needed."]
    },
    sources: {
        type: [String],
        required: [true, "Atleast one sources is needed."]
    }
   },
   created: {
    type: Date,
    default: Date.now
   },
   updated: {
    type: Date,
    default: Date.now
   }
});

const User = mongoose.model('User', userSchema);

export default User;

