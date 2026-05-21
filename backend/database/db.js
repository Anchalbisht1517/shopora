import mongoose from 'mongoose';

const connectDB= async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/shopora`)
        console.log("mongodb connected successfully");
    }
    catch(error){
        console.log("Mongodb connection failed",error);
    }
}
export default connectDB