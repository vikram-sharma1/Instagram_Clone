



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



module.exports=router