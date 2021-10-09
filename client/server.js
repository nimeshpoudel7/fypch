const express =require('express');
const cors =require('cors');
//morgan
const morgan =require("morgan");
require("dotenv").config();
 

//create express app
const app=express();

//apply middlewares
app.use(cors());
//json data to front communicate middlewares
app.use(express.json());
app.use(morgan('dev'))

//to check middle ware
//req,res,next impp callback function
app.use((req,res,next)=>{
  console.log('this is my own middleware running');
  next();
  })

//route


//port of backend

const port = process.env.PORT ||8000;

//listren serever

app.listen(port,()=>console.log(`server is running on port ${port}`))
