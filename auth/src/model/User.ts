import mongoose from "mongoose";

const Schema = mongoose.Schema;

const User  = new Schema({
    username: {
        type:String,
        required: true
    },
    googleId: {
        type:String,
        required: true
    },
    
});
module.exports = mongoose.model('User',User);