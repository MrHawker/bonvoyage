require('dotenv').config();
import {MongoClient,ServerApiVersion} from 'mongodb'
const User = require('../model/User')
const uri = `mongodb+srv://profileuser:${process.env['password']}@userdata.qo1c2t7.mongodb.net/?retryWrites=true&w=majority&appName=userData`;
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
const addUser = async (username:String,googleId:String,email:String)=>{
    const db = client.db("bonvoyage")
    const collection = db.collection("userData")
    if(! await collection.findOne({googleId})){
        const user = new User({
            username:username,
            googleId:googleId,
            email:email
        })
        await collection.insertOne(user)
    }else{
        throw new Error("User existed");
    }
}

const getUser = async(googleId:String)=>{
    const db = client.db("bonvoyage")
    const collection = db.collection("userData")
    const user = await collection.findOne({googleId})
    if(user?.value != null){
        return {
            username:"Anon",
            googleId:"123456789",
            email:"JohnDoe@gmail.com"
        }
    }
    return user
}
const updateUser = async(googleId:String,username:String,description:String)=>{
    const db = client.db("bonvoyage")
    const collection = db.collection("userData")
    const result = await collection.findOneAndUpdate({googleId},{ $set: { username, description } })
    if(result != null){
        return result
    }else{
        throw new Error("No user with such Id");
    }
}
export {
    connectToMongo as connectToMongo,
    addUser as addUser,
    getUser as getUser,
    updateUser as updateUser,
    client as MongoClient
}