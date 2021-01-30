const router = require('express').Router();

const { error } = require('jquery');
// Models
const Post = require('../models/post')
const User = require("../models/user")
//GET api/posts
router.get('/', (req, res, next)=>{
    Post.find({}, (err, data)=>{
     if(err || !data){
            console.log(err)
         return;
         }
         res.json(data);
     })
})

// POST /api/posts
router.post('/', (req, res, next)=>{
    let post = new Post({
        name1: req.body.name1,
        q11: req.body.q11,
        q21: req.body.q21,
        dsnm1: req.body.dsnm1,
        season1: req.body.season1,
        q31: req.body.q31,
        epic1: req.body.epic1,
        rc1: req.body.rc1,
        
    })
    post.save(function(err, data){
        if(err || !data){
            console.log(err)
            res.json({error: err})
            return;
        }
        res.writeHead(200)

        res.end(`thank you for submit request your data has been sent to our 


if we accept you we will send you message in private in Discord or we will mention you on this Discord channel (#accepted-user) `)
    })
})

module.exports = router;






 //  router.put('/:postId', (req, res, next)=>{
    //      let id = req.params.postId
    //     //  Post.findById(id, function(err, post){
    //     //      if(err || !post){
    //     //          console.log(err);
    //     //          res.json({error:err})
    //     //          return;
    //     //      }
    //     //      post.title = req.body.title
    //     //      post.content = req.body.content
    //     //      post.save((err, post)=>{
    //     //         if(err || !post){
    //     //          console.log(err)
    //     //          res.json({error: err})
    //     //          return;
    //     //         }
    //     //         res.json(post)
    //     //              })
    //     //  })
    //     Post.findByIdAndUpdate(id, {
    //         title: req.body.title,
    //         content: req.body.content
    //     }), (err, post)=>{
    //         if(err || !post){
    //             console.log(err)
    //             res.json({error: err})
    //             return;
    //         }
    //         res.json(post)
    //     }
    //  })