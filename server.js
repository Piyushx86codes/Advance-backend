const app = require("./src/app");
const connectDb = require("./src/db/db.js");
require("dotenv").config();

connectDb();


app.listen(3000,()=>{
    console.log("App is active and listening on Port No:3000");
})