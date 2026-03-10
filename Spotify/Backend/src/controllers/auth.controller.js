const userModel=require('../models/user.model');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

const registerUser=async(req,res)=>{
    const {name,email,password,role}=req.body;

    //if the user already exists 
    const existingUser=await userModel.findOne({
        $or:[
            {name},
            {email}
        ]
    })

    if(existingUser){
        return res.status(409).json({
            message:"User with the same name or email already exists"
        })
    }

    //hash the password for new user 
    const hashedPassword=await bcrypt.hash(password,10);

    //create the user in database 
    const newUser=await userModel.create({
        name,
        email,
        password:hashedPassword,
        role
    })

    const token=jwt.sign(
        {id:newUser._id,role:newUser.role},
        process.env.JWT_SECRET,
        {expiresIn:"7d"}
    )

    res.cookie("token",token);
    

    return res.status(201).json({
        message:"User registered successfully",
        user:newUser
    })
}

module.exports={registerUser}