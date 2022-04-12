const Post = require('../models/Post')



const addPost = async (req, res) => {
    const post = await Post.create(req.body)
    res.status(200).json({post})
}

const getPosts = async (req,res) => {
    const posts = await Post.find({})
    res.status(200).json({posts})
}

module.exports = {addPost, getPosts}