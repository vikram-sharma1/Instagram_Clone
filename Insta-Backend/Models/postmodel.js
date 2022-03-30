const mongoose = require("mongoose")


const postschema = new mongoose.Schema(
    {

        user_id : {type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
        post_image:{type : String, required : true},
        post_location:{type : String, required : false},
        post_hashtags:{type : String, required : false},
        post_caption:{type : String, required : false},
        post_commenting:{type : String, required : false,default:"on"}
       
    }, 
    {
        versionKey: false,
        timestamps:true
    }
)


module.exports = mongoose.model('post', postschema)
