require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
import axios from "axios";
const uri = `mongodb+srv://bonbonmuoiot:${process.env['password']}@authentication.ewqibus.mongodb.net/?retryWrites=true&w=majority&appName=authentication`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
const User = require('../model/User');
const connectToMongo = ()=>{
    client.connect().then(()=>{
    console.log("Now connected to mongoDB")
    })
}
const addUser = async (username:String,googleId:String,email:String)=>{
    const db = client.db("bonvoyage")
    const collection = db.collection("auth")
    if(! await collection.findOne({googleId})){
        const user = new User({
            username:username,
            googleId:googleId
        })
        await collection.insertOne(user)
    }
    axios.post('http://localhost:4001/api/addUserProfile',{
            username:username,
            googleId:googleId,
            email:email
    }).catch(()=>{})
}
export {
    connectToMongo as connectToMongo,
    addUser as addUser
}