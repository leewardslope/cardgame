import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  uid: String, // Firebase ID
  email: String,
});

const User = mongoose.model('User', userSchema);

export default User;
