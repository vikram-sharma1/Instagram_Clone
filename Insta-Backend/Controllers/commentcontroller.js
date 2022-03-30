



const { Router } = require('express')
const router = Router()

const Comment=require("../Models/commentmodel")





router.post("",async(req,res)=>{
try{
console.log(req.body,"req")
const  comment=await Comment.create(req.body)
res.status(500).send(comment)

}
catch(err){


res.status(404).send(err)
console.log(err)
}




})




router.patch("/:id",async(req,res)=>{
    try{
       
    // const {id}=req.params
    console.log("myid",id)
    const  comment=await Comment.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(500).send(comment)
    
    }
    catch(err){
    
    
    res.status(404).send(err)
    console.log(err)
    }
    
    
    })
    
    

    router.delete("/:id",async(req,res)=>{
        try{
           
        
        const  comment=await Comment.findByIdAndDelete(req.params.id)
        res.status(500).send(comment)
        
        }
        catch(err){
        
        
        res.status(404).send(err)
        console.log(err)
        }
        
        
        })




module.exports=router