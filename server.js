const app = require("./src/app");

app.get("/",(req,res)=>{
    res.send("hello world");
})

app.listen(3000,()=>{
    console.log("App is active and listening on Port No:3000");
})