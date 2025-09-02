const express=require("express")

const router=express.Router()

router.get('/',(req,res)=>{
    res.json({message:"Get all workout"})
})

router.get('/:id',(req,res)=>{
    res.json({message:"Get all a single workout"})
})

router.post('/',(req,res)=>{
    res.json({message:"post a new workout"})
})

router.delete('/:id',(req,res)=>{
    res.json({message:"delete a workout"})
})

router.patch('/:id',(req,res)=>{
    res.json({message:"update a workout"})
})

module.exports=router