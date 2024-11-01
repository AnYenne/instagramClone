const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController.cjs')

//get all posts of user
router.get('/user/:id', postController.getAllPosts )


//get all posts of user
// router.post('/user/create/:id', postController.createAPost )

//create posts of the user
// router.post('user/:userid', postController.createPost)

module.exports = router