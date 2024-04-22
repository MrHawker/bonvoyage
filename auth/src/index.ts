import express from 'express';
import {json} from 'body-parser';
import cors from 'cors';
const passport = require('passport');
import { GoogleOAuthRouter } from './routes/GoogleOAuth';
import { LogInRouter } from './routes/LogIn';
import { LogOutRouter } from './routes/LogOut';
import "./routes/mongoDB"
import {  connectToMongo } from './routes/mongoDB';
const session = require('express-session');
const LoggedIn = (req:any,res:any,next:any)=>{
    req.user ? next() : res.sendStatus(401);
}
const app = express();
app.use(session({
    secret: 'keyboard cat',
    resave:false,
    saveUninitialized:false,
    
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(json());
app.use(cors());
app.use(GoogleOAuthRouter);
app.use(LogInRouter);
app.use(LogOutRouter);
connectToMongo();
app.get('/api/users/CurrentUser',LoggedIn,(req,res)=>{
    req.user ? res.send(`<h1/>HELOO THERE ${req.user.displayName}<h1/>`) : res.send("BRUH");
})
app.get('/',(req,res)=>{
    res.send("<h1/>HELOO THERE MOTHERFUCKER !<h1/>")
})
app.listen(4000,()=>{
    console.log("Authenticator listening on port 4000!!!");
})