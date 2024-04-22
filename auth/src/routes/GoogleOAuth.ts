import express from "express";
import "../routes/mongoDB"
import { addUser } from "../routes/mongoDB";
require('dotenv').config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
passport.use(new GoogleStrategy({
    clientID: process.env['GOOGLE_CLIENT_ID'],
    clientSecret: process.env['GOOGLE_CLIENT_SECRET_ID'],
    callbackURL: "http://localhost:4000/api/users/Welcome",
    passReqToCallBack:true
  },
  function(request:any, accessToken:any, refreshToken:any, profile:any, cb:any) {
        addUser(profile.displayName,profile.id);
        return cb(null,profile);
  }
));
passport.serializeUser( (user: any,done: any) =>{
    done(null,user);
})
passport.deserializeUser( (user: any,done: any) =>{
    done(null,user);
})
const router = express.Router();
router.get('/api/users/OAuth',passport.authenticate('google',
{
    scope: ['email','profile']
}))

router.get('/api/users/Welcome',
    passport.authenticate('google',{
        failureRedirect: 'http://localhost:4000',
    }),
    function(req, res) {
        res.redirect('http://localhost:3000');
    }
)
export {router as GoogleOAuthRouter};