const express=require('express');
const dotenv=require('dotenv').config();

const app=express()

app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next()
    
})

app.get('/',(req,res)=>{
    res.json({message:"hello there"})
})

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`);
    
})