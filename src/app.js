const express = require("express");
const app = express();
const multer = require("multer");
const uplaodFile = require("./services/storage.service.js");
const postModel = require("./models/post.model.js");
app.use(express.json());


const upload = multer({storage: multer.memoryStorage()})

app.post("/create-post", upload.single("image"), async(req,res)=>{
    const result = await uplaodFile(req.file.buffer);
    const post = await postModel.create({
        image:result.url,
        caption:result.body.caption,
    })
    return res.status(201).json({
        success:true,
        message:"Post Created successfully",
        post,
    })
})

app.get("/post",async(req,res)=>{
    const posts = await postModel.find();
    return res.status(200).json({
        success:true,
        message:"Posts fetched successfully",
    })
})



module.exports = app;