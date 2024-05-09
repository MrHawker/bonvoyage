import express from 'express'
import {json} from 'body-parser';
import cors from 'cors';
const app = express()

app.use(json())
app.use(cors())


app.listen(4003,()=>{
    console.log("map data manager listening on port 4003")
})