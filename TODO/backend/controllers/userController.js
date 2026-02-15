const userModel = require("../model/userModel");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const registerController=async(req,res)=>{
    try{
        const{username,email,password}=req.body;
        //validation
        if(!username || !email || !password){
            return res.status(400).send({
                success:false,
                message:"Please fill all the fields"
            })
        }
        //check existing user 
        const existingUser=await userModel.findOne({email})
        if(existingUser){
            return res.status(500).send({
                success:false,
                message:"User already exists"
            })
        }
        //hash password
        //more the salt rounds more secure the password but it will take more time.
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);
        //save user 
        const newUser=new userModel({username,email,password:hashedPassword})
        await newUser.save();
        res.status(201).send({
            success:true,
            message:"User Register Successfully",
        })
    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Register API",
            error
        })
    }
};

const loginController=async(req,res)=>{
    try{
        const{email,password}=req.body;
        //validation 
        if(!email || !password){
            return res.status(400).send({
                success:false,
                message:"Please fill all the fields"
            })
        }
        //check user
        const user=await userModel.findOne({email});
        if(!user){
            return res.status(404).send({
                success:false,
                message:"User not found"
            })
        }
        //compare password
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).send({
                success:false,
                message:"Invalid password"
            })
        }
        const token=await jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1d"});
        res.status(200).send({
            success:true,
            message:"login successfully",
            token,
            user:{
                id:user._id,
                username:user.username,
                email:user.email
            }
        })
    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Login API",
            error
        })
    }
};


module.exports={registerController,loginController};