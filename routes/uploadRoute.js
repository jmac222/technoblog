const express = require('express')
const router = express.Router()
const {addPost, getPosts, updatePost} = require('../controllers/post')



router.route('/').post(addPost).get(getPosts).put(updatePost)

module.exports = router