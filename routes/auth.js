const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model('User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')
const requireLogin = require('../middleware/requireLogin')
var cors = require('cors')



router.get('/protected',requireLogin, (req,res) => {
    res.send("hello User")
})

// Sign up endpoint
router.post('/signup',(req,res)=>{
    // fetch the user information
    const {name,email,password} = req.body

    // Check if there any empty fields
    if(!email || !password ||!name) 
        // if there an empty fields send an error
       return res.status(422).json({error: 'Please enter all fields'}) 
    // Check if the email is already exists
    User.findOne({email: email}).then((savedUser)=>{
        if(savedUser)
            // if the user email is already in the database send an error
            return res.status(422).json({error: 'User already exists with that email'})   
        // Encrypt the Password For Security
        bcrypt.hash(password,12)
        .then((hashedPassword)=>{
            // Creatr New User 
            const user = new User({
                email,
                password:hashedPassword,
                name
            })
            // Save the User to mongodb
            user.save()
            .then((user)=>res.json({message:"Successfully signed up"}))
            .catch((err)=>console.log(err))
        })
    })
    .catch((err)=>console.log(err))
})

// Login endpoint
router.post('/login',(req, res)=>{
    // get the user data
    const {email,password} = req.body
    // Check if there any empty fields
    if(!email|| !password){
        return res.status(422).json({error: 'Please enter all the fields below'})
    }
    // Check if the email is already exists
    User.findOne({email})
    .then((savedUser)=>{
        // if the user email is not in the database send an error
        if (!savedUser) {
         return res.status(422).json({error: "Invalid Email or password"})
        }
        // Compare the Encrypted Password with  user Password
        bcrypt.compare(password,savedUser.password)
        .then((doMatch)=>{
            // if they match then Login Successfully
            if (doMatch) {
                // create a Token for the User
                const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
                res.json({token})
            }
            // If there are not match
            else{
                return res.status(422).json({error: "Invalid Email or password"})
            }
        })
        .catch((err)=>{console.log(err)});
    })
    .catch((err)=>{console.log(err)});
})
module.exports = router