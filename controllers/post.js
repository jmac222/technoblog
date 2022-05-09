const Post = require('../models/Post')



const addPost = async (req, res) => {
    const post = await Post.create(req.body)
    res.status(200).json({post})
}

const getPosts = async (req,res) => {
    const posts = await Post.find({})
    res.status(200).json({posts})
}

const updatePost = async (req, res) => {
    const {_id, subject, content} = req.body
    console.log(_id, subject, content)
    const output = await Post.findByIdAndUpdate(_id, {subject: subject, content: content})
    
    res.json({output})

}


const deletePost = async (req,res) => {
    
    console.log(req.params.id);
    const output =  await Post.findByIdAndDelete(req.params.id)


    res.status(200).send("Good")
    
    
}
module.exports = {addPost, getPosts, updatePost, deletePost}