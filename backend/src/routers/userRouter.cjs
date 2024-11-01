const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.cjs')

//Get User data
router.get('/:id', userController.getUser );

//Get all Users data
router.get('/', userController.getAllUsers )

//Get 

module.exports = router