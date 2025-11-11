import express from "express" //import express
import type { Application } from 'express' //for typing
import { startMongoClient } from "./services/mongoServices.ts"
import 'dotenv/config' //need these packages to load from env files
import furnitureRouter from "./routes/furnitureRoutes.ts"

const app: Application = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

async function setupClient() {
    const client = await startMongoClient()
    app.locals.client = client;
}

setupClient()

app.use("/", furnitureRouter);

const PORT = 3000; //port 3000 for local development
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
}) 
