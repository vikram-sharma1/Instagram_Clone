const mongoose = require("mongoose")


const userschema = new mongoose.Schema(
    {
        full_name : { type : String, required : true },
        user_name : { type : String, required : true },
        user_story:[{type : String, required : false}],
        archived_story:[{type : String, required : false}],

        user_website:{type : String, required : false},

        user_password : { type : String, required : true },
        user_email:{type : String, required : true},
        user_dob:{type : String, required : true},
        user_number:{type : String, required : true},
        user_bio:{type : String, required : false},
        user_image : { type : String, required : false },
        user_status : { type : String, required : false,default:"public" },
       user_following:[{type:mongoose.Schema.Types.ObjectId,ref:"user",required:false},],
       user_followers:[{type:mongoose.Schema.Types.ObjectId,ref:"user",required:false},],
    }, 
    {
        versionKey: false,
        timestamps:true
    }
)





module.exports = mongoose.model('user', userschema)