import mongoose from "mongoose";

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            "dbName":"Ecommerce2026"
        })
        console.log("Database Connected");
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;