

const { Router } = require('express')
const router = Router()
const authmiddleware=require('../middlewares/authenticate')
const Post=require("../Models/postmodel")



router.post("",authmiddleware,async(req,res)=>{
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




// this route is responsible for post caption change

    router.patch("/:id",async(req,res)=>{
        try{
          const  newpost=await Post.findByIdAndUpdate(req.params.id,req.body,{new:true})
          console.log(newpost,"newpost")

        // console.log(req.body,"req")
        // const  post=await Post.create(req.body)
        // res.status(500).send(post)
        
        }
        catch(err){
        
        
        res.status(404).send(err)
        console.log(err)
        }
        
        
        
        
        })







    module.exports=router