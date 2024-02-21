import mongoose from "mongoose";
import "./Product";


const { Schema } = mongoose;

const checkoutSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, required: true, ref:"User" },
  products: {type: [Schema.Types.ObjectId], ref:"Product"},
});

const Checkout = mongoose.models.Checkout || mongoose.model("Checkout", checkoutSchema);

export default Checkout;
