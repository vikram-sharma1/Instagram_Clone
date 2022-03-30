const express=require("express")

const app=express()

const mongoose=require("mongoose")

const connect=()=>{

    mongoose.connect("mongodb+srv://walson:123@cluster0.9zmxk.mongodb.net/test")
    
    
    }

    app.use(express.json())


    const signup=require("./Controllers/usercontroller")


    app.use("/signup",signup)






















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
