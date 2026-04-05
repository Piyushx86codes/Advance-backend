const express = require("express");
const app = express();
app.use(express.json());

const notes =[];

//note creatio api//
app.post("/notes",(req,res)=>{
    notes.push(req.body);
    return res.status(201).json({
        message:"note created successfully", 
    })
})

//note fecthing api//
app.get("/notes",(req,res)=>{
    res.status(200).json({
        message:"notes fetchedd successfully",
        notes:notes,
    })
})

//note deletio api//
app.delete("/notrs/:index",(req,res)=>{
    const index = req.params.index;
    delete notes[index];
    return res.status(200).json({
        message:"note deleted successfully",
    })
})

//description update api//
app.patch("/notes/:index",(req,res)=>{
    const index = req.params.index;
    const {description} = req.body;
    notes[index].description = description;
    return res.status(200).json({
        message:"successfully updated the description",
    })
})

module.exports = app;