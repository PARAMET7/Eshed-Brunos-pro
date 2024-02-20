import mongoose from "mongoose";
import "./Review";
const { Schema } = mongoose;

const productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  currency: { type: String, required: true },
  category: { type: String, required: true },
  image_url: { type: String, required: true },
  //variations : [{type: Array, required: true }]
  // reviews: { type: [Schema.Types.ObjectId], ref: "Review" },
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
