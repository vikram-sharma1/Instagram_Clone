const express=require("express")

const app=express()

const mongoose=require("mongoose")
const signup=require("./Controllers/usercontroller")
const post=require('./Controllers/postcontroller')
const comment=require('./Controllers/commentcontroller')


const connect=()=>{

    mongoose.connect("mongodb+srv://walson:123@cluster0.9zmxk.mongodb.net/test")
    
    
    }

    app.use(express.json())




    app.use("/signup",signup)
    app.use('/post',post)
    app.use("/comment",comment)






















    app.listen("5000",async()=>{
       try{
        await connect()
        console.log("listening 5000")
        }

        catch(err)
        {
           console.log(err) 
        }
        
        })