//services only handle DB logic
import {type Request, type Response } from "express";
import {Db, MongoClient} from "mongodb";

export async function getItemsInCart (client: MongoClient) { 
    
        const db: Db = client.db("FurnitureDB");
        const cart = await db.collection("Cart").find({}).toArray();
        return cart
}

export async function addItemToCart (client: MongoClient, req: Request) {

        const db: Db = client.db("FurnitureDB")
        const collection = db.collection("Cart")
        let newItem = req.body;
        const result = await collection.insertOne(newItem)
        return result.insertedId

}


