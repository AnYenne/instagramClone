const userService = require('../services/userService.cjs')
const bcrypt = require('bcrypt');

class UserController {

    // fn for get all users

   async getAllUsers(req,res,next){

    try {
            const Users = await userService.fetchAllUsers()
            res.status(200).json(Users);
    } catch (error) {
            console.log(error)
            res.status(500).json({message: 'error fetching users', error})
        }
    }

    //fn get only 1 user
    async getUser(req,res,next){
        try{
            const User = await userService.fetchUser(req.params.id)
            res.status(200).json(User);
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'error fetching user', error})
        }
    }
    //fn for register
    async register(req, res, next){
        try {
            const User = await userService.register(req.body)
            res.status(200).json(User)
        } catch (error) {
            console.log(error)
            res.status(500).json({message: 'error register'})
        }
    }
}
module.exports = new UserController;