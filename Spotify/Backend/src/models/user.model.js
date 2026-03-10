const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true,
        minlength:6,
    },
    role:{
        type:String,
        enum:["user","artist"],
        default:"user"
    }
})

const userModel=mongoose.model("User",userSchema);

module.exports=userModel;