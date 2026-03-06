const express = require("express");
const multer = require("multer");
const uploadFile = require("../services/storage.service");
const postModel=require('../models/post.model');

const app = express();
const upload = multer();

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

module.exports=app;