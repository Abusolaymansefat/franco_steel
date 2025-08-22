

import dbConnect from "@/lib/dbConnect";

export async function GET() {
  try {
    const productsCollection = await dbConnect("products");
    const products = await productsCollection.find().toArray();

    return Response.json(products);
  } catch (error) {
    console.error(error);
    return Response.json(
      { message: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const productsCollection = await dbConnect("products");
    const result = await productsCollection.insertOne(body);

    return Response.json({ message: "Product added", id: result.insertedId });
  } catch (error) {
    console.error(error);
    return Response.json({ message: "Failed to add product" }, { status: 500 });
  }
}
