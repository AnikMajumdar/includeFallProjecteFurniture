//services only handle DB logic
import {type Request, type Response } from "express";
import {Db, MongoClient, ObjectId} from "mongodb";

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

export async function getItemById (client: MongoClient, itemId: string) {

        const db: Db = client.db("FurnitureDB")
        const collection = db.collection("Cart")
        const item = await collection.findOne({ _id: new ObjectId(itemId) })
        return item

}

export async function deleteItemById (client: MongoClient, itemId: string) {

        const db: Db = client.db("FurnitureDB")
        const collection = db.collection("Cart")
        const result = await collection.deleteOne({ _id: new ObjectId(itemId) })
        return result.deletedCount

}


