import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const product = await Product.findById(id).populate("reviews");

    if (!product) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(product);
  }
  if (request.method === "PATCH") {
    const updatedProData = request.body
    console.log("updatedProData=>", updatedProData)

    await Product.findByIdAndUpdate(id, updatedProData)
    if (!updatedProData) {
      return response.status(404).json({ status: "Could not edit/update the products" })
    }
    response.status(200).json({ status: "updated/edited this Place" })
  }

  if (request.method === "DELETE") {
    await Product.findByIdAndDelete(id);
    return response.status(200).json({ status: "Product successfully deleted" });
  }

  // if (request.method === "POST") {

  //   try {
  //     const commentData = request.body
  //     // commentData has name, comment, placeIdForComment
  //     const newComment = await Comment.create(commentData)
  //     const placeWithNewComment = await Product.findById(commentData.placeIdForComment)
  //     placeWithNewComment.comments.push(newComment)
  //     await placeWithNewComment.save()

  //     return response.status(201).json({ status: "added Comment successfully" })
  //   } catch (error) {
  //     console.error(error)
  //     return response.status(400).json({ status: "Could not add Comment!!" })
  //   }
}


