

const { Router } = require('express')
const router = Router()

const User=require("../Models/usermodel")





router.post("",async(req,res)=>{
try{
console.log(req.body,"req")
const  user=await User.create(req.body)
res.status(500).send(user)

}
catch(err){


res.status(404).send(err)
console.log(err)
}




})



module.exports=router