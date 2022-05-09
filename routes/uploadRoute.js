const express = require('express')
const router = express.Router()
const {addPost, getPosts, updatePost, deletePost} = require('../controllers/post')



router.route('/').post(addPost).get(getPosts).put(updatePost)
router.route('/:id').delete(deletePost)

module.exports = router