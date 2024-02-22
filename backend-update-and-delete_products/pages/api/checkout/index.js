// import User from "../../../db/models/User";
import connect from "@/db/Product";
import { Product } from "@/db/models/Product";

export default async function handler(request, response) {
  await connect();

  if (request.method === "GET") {
    const products = await Product.find();
    return response.status(200).json(products);
  }

  if (request.method === "POST") {
    try {
      const proData = request.body;
      await Place.create(proData);

      response.status(201).json({ status: "product created" });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
