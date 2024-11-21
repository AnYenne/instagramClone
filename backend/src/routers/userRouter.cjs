const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.cjs')

//Post register
router.post('/register', userController.register)

//Get User data
router.get('/:id', userController.getUser );

//Get all Users data
router.get('/', userController.getAllUsers )



module.exports = router