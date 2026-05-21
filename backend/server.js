import express from 'express';
import 'dotenv/config'
import connectDB from './database/db.js';
import { connect } from 'mongoose';
const app=express();
const port=process.env.PORT||3000;
 
app.listen(port,()=>{
    connectDB()
    console.log(`server is listening at ${port}`);
})