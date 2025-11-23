import {type Request, type Response } from "express";
import {Db, MongoClient, ObjectId} from "mongodb";
import bcrypt from "bcryptjs";

//create user
export async function createUser (client: MongoClient, username: string, password: string) {

        const hashedPassword = await bcrypt.hash(password, 10) //hashing the password....
        const db: Db = client.db("FurnitureDB")
        const collection = db.collection("Users")
        const user = await collection.insertOne({username, password: hashedPassword})
        return user.insertedId

}

export async function getUserById (client: MongoClient, id: string) {
        const user = await client.db("FurnitureDB").collection("Users").findOne({_id: new ObjectId(id)})
        return user
}

export async function getUserByUsername (client: MongoClient, username: string) {
        const user = await client.db("FurnitureDB").collection("Users").findOne({username})
        return user
}