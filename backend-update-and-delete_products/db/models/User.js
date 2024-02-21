import mongoose from "mongoose";
import "./Product";


const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  favoriteProducts: {type: [Schema.Types.ObjectId], ref:"Product"},
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
