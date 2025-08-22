
import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.NEXTAUTH_PUBLIC_MONGODB_URI;

if (!uri) {
  throw new Error("Please define NEXTAUTH_PUBLIC_MONGODB_URI in .env");
}

let client;
let clientPromise;

if (!client) {
  client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  clientPromise = client.connect();
}

export default async function dbConnect(collectionName) {
  const db = (await clientPromise).db(process.env.DB_NAME);
  return db.collection(collectionName);
}
