const userModel = require("../model/userModel");

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
        //save user 
        const newUser=new userModel({username,email,password})
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

        res.status(200).send({
            success:true,
            message:"login successfully",
            user
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