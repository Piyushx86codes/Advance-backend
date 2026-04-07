const app = require("./src/app");
const connectDb = require("./src/db/db.js");

connectDb();


app.listen(3000,()=>{
    console.log("App is active and listening on Port No:3000");
})