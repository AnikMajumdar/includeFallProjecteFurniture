import { Router, type Request, type Response } from "express";
import { Collection, Db, MongoClient, ObjectId } from "mongodb";

const furnitureRouter = Router();


furnitureRouter.get("/cart", async (req: Request, res: Response) => {
  try {
        const client: MongoClient = req.app.locals.client;
        const db: Db = client.db("FurnitureDB");
        const cart = await db.collection("Cart").find({}).toArray();
        res.json(cart);
  } catch (error) { 
        console.log("error fetching records", error);
  }
});

furnitureRouter.post("/cart", async (req: Request, res: Response) => {
    try {
        const client: MongoClient = req.app.locals.client 
        const db: Db = client.db("FurnitureDB")
        const collection = db.collection("Cart")
        let newItem = req.body;
        const result = await collection.insertOne(newItem)
        res.json(result)
        }
    catch (error) {
        console.log('error adding new item to cart', error)
    }
    }
);

export default furnitureRouter;
