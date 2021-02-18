import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
  headline: String,
  country: String,
  city: String,
  phone: String,
  lastName: String,
  firstName: String,
  image: String,
  socials: Array,
});

const User = mongoose.model("User", userSchema);

export default User;
