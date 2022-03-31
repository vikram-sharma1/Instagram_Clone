const express=require("express")

require("dotenv").config();

const { register, login } = require("./controllers/authentificationcontroller");



const app=express()

const mongoose=require("mongoose")
const signup=require("./Controllers/usercontroller")
const post=require('./Controllers/postcontroller')
const comment=require('./Controllers/commentcontroller')


const connect=()=>{

    mongoose.connect("mongodb+srv://walson:123@cluster0.9zmxk.mongodb.net/test")
    
    
    }

    app.use(express.json())

console.log(process.env.JWT_SECRET_KEY)


    app.post("/signup",register)
     app.post("/login",login)
    app.use('/post',post)
    app.use("/comment",comment)






















    app.listen(process.env.PORT ||8080,async()=>{
       try{
        await connect()
        console.log("listening 8080")
        }

        catch(err)
        {
           console.log(err) 
        }
        
        })
