const mongoose = require("mongoose");

const NotesSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"title is required"],
    },
    description:{
        type:String,
        required:[true,"Description is required"],
    }
})

const NoteModel = new mongoose.model("note",NotesSchema);
module.exports = NoteModel;