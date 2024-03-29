const express = require('express');
const cookieParser = require("cookie-parser");
const cors = require('cors');
const app = express();
require("dotenv").config()
const mongoose=require("mongoose")
const {MONGO_URL,PORT}=process.env
let {Login,userVerification}=require("./Controllers/AuthController.js")

//mongo connection
mongoose.connect(MONGO_URL,{dbName:'Admins'})
.then(()=>console.log("db connection successfull"))
.catch((err)=>console.log(err.message))

app.use(
  cors({
  origin:["http://localhost:3000"],
  method:["get","post"],
  credentials:true
}
));
app.use(cookieParser())
app.use(express.json())

//server
app.listen(PORT,()=>{
  console.log("server started at port 4000")
});
app.post("/login",Login)
app.post("/",userVerification)





