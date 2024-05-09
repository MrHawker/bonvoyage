import express from 'express'
import {json} from 'body-parser'
import cors from 'cors'
import { connectToMongo } from './routes/mongodb'
import { RecordOps } from './routes/recordOps'
const app = express()
app.use(json())
app.use(cors())
app.use(RecordOps)
connectToMongo()
app.listen(4002,()=>{
    console.log("record manager listening on port 4002!")
})