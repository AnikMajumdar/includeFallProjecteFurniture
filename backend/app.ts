import express from "express" //import express
import type { Application } from 'express' //for typing
import { startMongoClient } from "./services/mongoServices.ts"
import 'dotenv/config' //need these packages to load from env files
import { Db, MongoClient, ObjectId } from "mongodb"

 
const app: Application = express()
app.use(express.json())


async function setupClient() {
    const client = await startMongoClient()
    app.locals.client = client;
}

setupClient()

app.get('/cart', async (req, res ) => { //get items from cart

    const client: MongoClient = req.app.locals.client;
    const db: Db = client.db("FurnitureDB");

    try {
        const cart = await db.collection("Cart").find({}).toArray();
        res.json(cart)
    } catch (error) {
        console.log('database error')
    }
})


app.post('/cart', async (req, res) => { //add item to cart

    const client: MongoClient = req.app.locals.client;
    const db: Db = client.db('FurnitureDB');

    /*

    TO-DO

    */
})

const PORT = 3000; //port 3000 for local development
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
}) 
