require('dotenv').config();
import {MongoClient,ServerApiVersion ,ObjectId} from 'mongodb'
const SearchRecord = require('../model/SearchRecord')
const uri = `mongodb+srv://mapUser:${process.env['password']}@mapdata.mgvpmed.mongodb.net/?retryWrites=true&w=majority&appName=mapData`;
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});
const connectToMongo = ()=>{
    client.connect().then(()=>console.log("Connected to db")).catch(err=>{console.log(err)})
}
const addRecord = async (googleId:String,destination:String,city:String,type:String,link:String)=>{
    const db = client.db("bonvoyage")
    const collection = db.collection("map")
    const date = new Date()
    const record = new SearchRecord({
        googleId:googleId,
        date:date,
        destination:destination,
        city:city,
        type:type,
        link:link
    })
    await collection.insertOne(record)
        
}
const getRecords = async(googleId:String)=>{
    const db = client.db("bonvoyage")
    const collection = db.collection("map")
    const records = await collection.find({googleId}).toArray()
    const readable_records = records.map(e=>{
        return {
            ...e,
            date:e.date.toString()
        }
    })
    return readable_records
}
const deleteRecord = async(recordId:string)=>{
    const db = client.db("bonvoyage")
    const collection = db.collection("map")
    if(!await collection.deleteOne({_id:new ObjectId(recordId)})){
        throw new Error("No document with such Id exist");
    }
}
export {
    connectToMongo as connectToMongo,
    addRecord as addRecord,
    getRecords as getRecords,
    deleteRecord as deleteRecord,
    client as MongoClient
}