import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
      name: {
            type: String
      },
      email: {
            type: String,
            unique: true
      },
      password: {
            type: String
      },
      phoneNumber: {
            type: String
      },
      age: {
            type: Number
      }
});
const data = mongoose.model('user', userSchema);
export default data;