const mongoose = require("mongoose")


const postschema = new mongoose.Schema(
    {

        user_id : {type:mongoose.Schema.Types.ObjectId,ref:"user",required:true,unique:true},
        post_image:{type : String, required : true},
        post_location:{type : String, required : false},
        post_hashtags:[{type : String, required : false,unique:true}],
        post_caption:{type : String, required : false},
        post_commenting:{type : String, required : false,default:"on"},
       post_likers:[{type:mongoose.Schema.Types.ObjectId,ref:"user",required:false,unique:true}]
    }, 
    {
        versionKey: false,
        timestamps:true
    }
)


module.exports = mongoose.model('post', postschema)
