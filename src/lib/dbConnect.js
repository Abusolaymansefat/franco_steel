import { MongoClient, ServerApiVersion } from "mongodb";

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.sq4up6y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let dbClient;

export default async function dbConnect(collectionName) {
  if (!dbClient) {
    dbClient = await client.connect();
  }
  return dbClient.db(process.env.DB_NAME).collection(collectionName);
}