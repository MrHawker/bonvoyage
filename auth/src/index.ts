import express from 'express';
import {json} from 'body-parser';
import cors from 'cors';
const app = express();
app.use(json());
app.use(cors());
app.get('/api/users/CurrentUser',(req,res)=>{
    
    res.send("<h1/>HELOO THERE<h1/>")
})
app.listen(4000,()=>{
    console.log("Authenticator listening on port 4000!");
})