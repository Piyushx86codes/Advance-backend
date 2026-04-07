const express = require("express");
const app = express();
const NoteModel = require("../src/models/notes.model.js");



app.use(express.json());


module.exports = app;