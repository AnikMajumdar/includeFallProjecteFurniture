//Connecting to mongodb
import { MongoClient, ServerApiVersion} from "mongodb"

export async function startMongoClient() {
  
    const connectionString: string = process.env.MONGODB_URI || "" //load in string

    if (!connectionString) {
        console.error("failed to load mongodb connection string")
        return
    } 

    const client = new MongoClient(connectionString, { //create new client
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true
        }
    });
    
    try { //try to connect to the client
        await client.connect()
        await client.db("FurnitureDB").command({ping: 1})
        console.log('Pinged. You are now connected to mongoDB')
         return client
        
    } catch (e) {
        console.log('failed to connect', e)
        return 
    }


}



