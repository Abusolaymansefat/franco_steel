import dbConnect from "@/lib/dbConnect";

export async function GET() {
  try {
    const productsCollection = await dbConnect("products");
    const products = await productsCollection.find().toArray();
    return new Response(JSON.stringify(products), { status: 200, headers: { "Content-Type": "application/json" } });
  } catch (error) {
    console.error("GET error:", error);
    return new Response(JSON.stringify({ message: "Failed to fetch products" }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const productsCollection = await dbConnect("products");
    const result = await productsCollection.insertOne(body);
    return new Response(JSON.stringify({ message: "Product added", id: result.insertedId }), { status: 201, headers: { "Content-Type": "application/json" } });
  } catch (error) {
    console.error("Mongo insert error:", error);
    return new Response(JSON.stringify({ message: "Failed to add product" }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
}
