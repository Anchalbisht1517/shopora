import mongoose from 'mongoose';

const userSchema= new mongoose.Schema({
    firstName:{type:String, required:true},
    lastName: {type:String, required:true},
    profilepic: {type:String, default:"" },
    profilepicpublicid: {type:String, default:""}

})