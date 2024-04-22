import mongoose from "mongoose";
const User = require('../model/User');
const connectToMongo = ()=>{
    mongoose.connect("mongodb://localhost/bonvoyage").then(()=>{
    console.log("Now connected to mongoDB")
    })
}
const addUser = async (username:String,googleId:String)=>{
    if(! await User.findOne({googleId})){
        const user = new User({
            username:username,
            googleId:googleId
        })
        const result = await user.save()
        console.log(result);
    }else{
        console.log("USER EXIST!")
    }
    
}
export {
    connectToMongo as connectToMongo,
    addUser as addUser
}
