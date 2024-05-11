import express from 'express';
import {json} from 'body-parser';
import cors from 'cors';
const passport = require('passport');
import { connectToMongo } from './routes/mongoDB';
import { GoogleOAuthRouter } from './routes/GoogleOAuth';
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
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(GoogleOAuthRouter);
connectToMongo()
app.get('/api/users/CurrentUser/username',LoggedIn,(req,res)=>{
    req.user ? res.send(`${req.user.displayName}`) : res.send("Anon");
})
app.get('/api/users/googleId',LoggedIn,(req,res)=>{
    req.user ? res.send(`${req.user.id}`) : res.send("Anon");
})
app.get('/logout', function(req, res, next){
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('http://localhost:3000');
    });
  });
  
app.listen(4000,()=>{
    console.log("Authenticator listening on port 4000!!!");
})