import { ObjectId } from "mongodb";
import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("foodmart_shop");

  console.log(req.query)

  const query = req.query.product_id;

  switch (req.method) {
    case 'GET':
        const product = await db.collection("products").findOne({ _id: new ObjectId(query) });
        res.json(product);
        break
    case 'DELETE':
        const result = await db.collection("products").deleteOne({ _id: ObjectId(query) });
        res.send(result);
        break
    default:
        res.status(405).end() //Method Not Allowed
        break
  }
}
