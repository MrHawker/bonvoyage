import express from 'express'
import {json} from 'body-parser';
import cors from 'cors';
import { connectToMongo} from './routes/mongodb';
import {UserProfile} from "./routes/UserData"
const app = express()

app.use(json())

app.use(cors({ credentials: true, origin: "http://localhost:3000" }))
app.use(UserProfile)
connectToMongo()
app.listen(4001,()=>{
    console.log("user data manager listening on port 4001!!")
})