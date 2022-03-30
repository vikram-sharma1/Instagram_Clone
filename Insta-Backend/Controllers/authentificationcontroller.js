require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/usermodel");
require('dotenv').config()
const bcrypt = require('bcryptjs')



const newToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
};

const register = async (req, res) => {
  try {
    // we will try to find the user with the email provided
    let user = await User.findOne({user_email: req.body.user_email }).lean().exec();

    // if the user is found then it is an error
    if (user)
      return res.status(400).send({ message: "Please try another email" },user);

    // if user is not found then we will create the user with the email and the password provided
    user = await User.create(req.body);

    // user = new User()
    // user.email = req.body.email
    // user.password = req.body.password
    // user.save();

    // then we will create the token for that user
    console.log("token")

    const token = newToken(user);

    // then return the user and the token
    res.send({ user, token });
  } catch (err) {
    res.status(500).send(err);
  }
};

const login = async (req, res) => {
  try {
    // we will try to find the user with the email provided
    let user = await User.findOne({user_email: req.body.user_email }).lean().exec();
  

   
    // If user is not found then return error
    if (!user)
      return res
        .status(400)
        .send({ message: "Please try another email or password" });


        
    // if user is found then we will match the passwords
   


   



  bcrypt.compare(req.body.password, user.password, function(err, result) {
     
    if (!result)
      return res
        .status(400)
        .send({ message: "Please try another email or password" });

        const token = newToken(user);

        res.send({ user, token });


  })



    

    // then we will create the token for that user

    // then return the user and the token
  } catch (err) {
    res.status(500).send(err);
    console.log(err)
  }


};

module.exports = { register, login };
