import mongoose from "mongoose";
const Schema = mongoose.Schema;

const SearchRecord  = new Schema({
    googleId: {
        type:String,
        required: true
    },
    date: {
        type:Date,
        required: true
    },
    destination: {
        type:String,
        require:true
    },
    city: {
        type:String,
        require:true
    },
    type: {
        type:String,
        require:true
    },
    link: {
        type:String,
        require:true
    }
    
});
module.exports = mongoose.model('SearchRecord',SearchRecord);