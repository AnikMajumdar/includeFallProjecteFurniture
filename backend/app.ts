import express from "express" //import express
import type { Application } from 'express' //for typing
import { startMongoClient } from "./services/mongoServices.ts"
import 'dotenv/config' //need these packages to load from env files
 

const app: Application = express()
app.use(express.json())

const client = await startMongoClient()


const PORT = 3000; //port 3000 for local development
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
}) 
