const express = require("express");
const multer = require("multer");
const uploadFile = require("../services/storage.service");
const postModel=require('../models/post.model');
const cors = require('cors')
const app = express();
const upload = multer();

app.use(cors({
  origin: [
    'http://localhost:3000',                                      
    'https://folio-beryl-seven.vercel.app',                      //  main URL
    'https://folio-git-main-tapaswaldes-projects.vercel.app',    
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}))

app.post("/create-post", upload.single("image"), async (req, res) => {

  const result = await uploadFile(req.file.buffer);
  const post=await postModel.create({
    image:result.url,
    caption:req.body.caption
  })
  return res.status(201).json({
    message: "Upload success",
    data:post
  });

});

app.get("/posts",async(req,res)=>{
  const posts=await postModel.find();

  return res.status(200).json({
    message:"Posts fetched successfully",
    posts:posts
  })
})

module.exports=app;