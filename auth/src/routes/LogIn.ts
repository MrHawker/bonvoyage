import express from "express";
const router = express.Router();
router.get('/api/users/LogIn',(req,res)=>{
    res.send("<h1/><a href='/api/users/OAuth'/> Authenticate with Google <a/><h1/>");
})
export {router as LogInRouter};