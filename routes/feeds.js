const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin = require('./../middleware/requireLogin')
const Post = mongoose.model('Post')


router.get('/allposts' ,(req, res)=>{
    Post.find()
    .populate("PostedBy","_id name")
    .then(posts=>{
        res.json({posts})
    })
    .catch(err=>{console.log(err)});
})

router.post("/createpost",requireLogin, (req,res)=>{
    const {title,body} = req.body
    if (!title || !body){
        return res.status(422).json({error:"Please add all fields"})
    }
    req.user.password = undefined
    const post = new Post({
        title,
        body,
        PostedBy:req.user
    })
    post.save().then(result=>{
        res.json({post:result})
    }).catch(err=>{console.log(err)});
})

router.get("/myposts",requireLogin,(req,res)=>{
    Post.find({PostedBy:req.user._id})
    .populate("PostedBy","_id name")
    .then(myPosts=>{
        res.json({myPosts})
    }).catch(err=>{console.log(err)});
})

module.exports= router