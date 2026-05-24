import express from 'express'
import 'dotenv/config'
import connectDB from './database/db.js'
import { connect } from 'mongoose'
import userRoute from './routes/userRoute.js'

const app=express()
const port=process.env.PORT||3000;
 
app.use(express.json())

app.use('/api/v1/user',userRoute)

app.listen(port,()=>{
    connectDB()
    console.log(`server is listening at ${port}`);
}) 