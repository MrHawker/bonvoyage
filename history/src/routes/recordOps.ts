import express, { response } from 'express'
import { addRecord,deleteRecord,getRecords } from './mongodb'
const router = express.Router()
router.post('/api/getRecords',(req,res)=>{
    const {googleId} = req.body
    getRecords(googleId)
    .then(response=>res.send(response))
    .catch((err)=>{console.log(err); res.send("Could not fetch records")})
})
router.post('/api/addRecord',(req,res)=>{
    const {googleId,destination,city,type,link} = req.body
    if(googleId && destination && city && type && link){
        addRecord(googleId,destination,city,type,link)
        .then(()=>{res.send("Successfully added Record")})
        .catch(()=>{res.status(500).send("Uh oh something went wrong")})
    }else{
        res.status(400).send("Invalid request")
    }
})
router.delete('/api/deleteRecord',(req,res)=>{
    const {recordId} = req.body
    if(recordId){
        deleteRecord(recordId)
        .then(()=>res.send("Successfully deleted Record"))
        .catch((err)=>{ console.log(err);res.status(500).send("Could not delete record")})
    }else{
        res.status(400).send("Invalid request")
    }
})
export {router as RecordOps}