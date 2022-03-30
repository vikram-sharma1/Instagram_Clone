const mongoose = require("mongoose")
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema(
    {
        full_name : { type : String, required : true },
        user_name : { type : String, required : true },
        user_story:[{type : String, required : false}],
        archived_story:[{type : String, required : false}],

        user_website:{type : String, required : false},

        password : { type : String, required : true },
        user_email:{type : String, required : true},
        user_dob:{type : String, required : true},
        user_number:{type : String, required : true},
        user_bio:{type : String, required : false},
        user_image : { type : String, required : false },
        user_status : { type : String, required : false,default:"public" },
       user_following:[{type:mongoose.Schema.Types.ObjectId,ref:"user",required:false,unique:true},],
       user_followers:[{type:mongoose.Schema.Types.ObjectId,ref:"user",required:false,unique:true},],
    }, 
    {
        versionKey: false,
        timestamps:true
    }
)

userSchema.pre("save", function (next) {
    if (!this.isModified("password")) return next();
  
    // secret , salt => sdkfhsdkfh , secret + sdkfhsdkfh => dskfgkcskdfgsdkfsdf
    // salt
    // hashing rounds =>
    var hash = bcrypt.hashSync(this.password, 4);
    this.password = hash;
    return next();
  });
  
  userSchema.methods.checkPassword  = function (password) {
    return  bcrypt.compareSync(password, this.password);
  };


module.exports = mongoose.model('user', userSchema)