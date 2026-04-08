const express = require("express");
const app = express();
const multer = require("multer");
const uplaodFile = require("./services/storage.service.js");
app.use(express.json());


const upload = multer({storage: multer.memoryStorage()})

app.post("/create-post", upload.single("image"), async(req,res)=>{
    const result = await uplaodFile(req.file.buffer);
})



module.exports = app;