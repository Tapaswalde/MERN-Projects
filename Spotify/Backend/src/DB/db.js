const mongoose=require('mongoose');
require('dotenv').config();

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected to database successfully");
    }catch(e){
        console.error("Error connecting to database:", e.message);
    }
}


module.exports=connectDB;