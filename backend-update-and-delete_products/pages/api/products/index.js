// api/jokes/index.js
import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";
// import Comment from "../../../../db/models/Comment";


export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const products = await Product.find(id);

    if (!products) { return response.status(405).json({ message: "Method not allowed" });
    }
    return response.status(200).json(products);
  }
}
