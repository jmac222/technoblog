const express = require('express')
const router = express.Router()
const {addPost, getPosts} = require('../controllers/post')



router.route('/').post(addPost).get(getPosts)

module.exports = router