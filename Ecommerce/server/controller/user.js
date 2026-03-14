import { OTP } from "../models/otp.js";
import { userModel } from "../models/user.js";
import sendOtp from "../utils/sentOtp.js";
import TryCatch from "../utils/TryCatch.js";
import jwt from 'jsonwebtoken';

export const loginUser=TryCatch(async(req,res)=>{
    const {email}=req.body;
    const subject="Ecomerce App";
    const otp=Math.floor(Math.random()*1000000);
    const prevOtp=await OTP.findOne({
        email,
    });
    if(prevOtp){
        await prevOtp.deleteOne();
    }
    await sendOtp({email,subject,otp});
    await OTP.create({email,otp});
    res.json({
        message:"Otp send to your mail",
    })
});

export const verifyUser=TryCatch(async(req,res)=>{
    const {email,otp}=req.body;

    //we have this otp in our db 
    const haveOtp=await OTP.findOne({
        email,
        otp, 
    });

    if(!haveOtp){
        return res.status(400).json({
            message:"Wrong otp",
        });
    }

    let user=await userModel.findOne({email})

    if(user){
        const token=jwt.sign({_id:user.id},process.env.JWT_SEC,{
            expiresIn:"15d",
        })

         await haveOtp.deleteOne()

    res.json({
        message:"User logged In",
        token,
        user,
    })
    }else{
     user=await userModel.create({
        email,
     })

     const token=jwt.sign({_id:user.id},process.env.JWT_SEC,{
            expiresIn:"15d",
        })

         await haveOtp.deleteOne()

    res.json({
        message:"User logged In",
        token,
        user,
    })
    }
   
})