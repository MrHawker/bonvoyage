import express from "express";
const router = express.Router();
import { addUser,getUser,updateUser } from "./mongodb";
const LoggedIn = (req:any,res:any,next:any)=>{
    req.user ? next() : res.sendStatus(401);
}
router.post('/api/getUserProfile',(req,res)=>{
    const googleId = req.body.googleId
    getUser(googleId).then(response=>res.send(response)).catch(()=>res.send({
        username:"Anon",
        googleId:"123456789",
        email:"JohnDoe@gmail.com"
    }))
})
router.post('/api/addUserProfile',(req,res)=>{
    if(req.body.username && req.body.googleId && req.body.email){
        addUser(req.body.username,req.body.googleId,req.body.email)
        .then(()=>res.status(200).send("Successfully added User"))
        .catch(()=>res.status(500).send("Could not add user to database"))
    }
    else{
        res.status(400).send("Invalid request")
    }
})
router.put('/api/updateUserProfile',(req,res)=>{
    const {googleId,username,description} = req.body
    if(username && description){
        updateUser(googleId,username,description)
        .then(()=>res.status(200).send("Successfully updated User"))
        .catch((err)=>res.status(500).send("Cound not update User"))
    }
    else{
        res.status(400).send("Invalid request")
    }
})
export {router as UserProfile}