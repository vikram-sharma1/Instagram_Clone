

const { Router } = require('express')
const router = Router()

const Post=require("../Models/postmodel")



router.post("",async(req,res)=>{
    try{
    console.log(req.body,"req")
    const  post=await Post.create(req.body)
    res.status(500).send(post)
    
    }
    catch(err){
    
    
    res.status(404).send(err)
    console.log(err)
    }
    
    
    
    
    })




    module.exports=router