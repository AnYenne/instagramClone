const userService = require('../services/userService.cjs')

class UserController {
   async getAllUsers(req,res,next){

    try {

            const Users = await userService.fetchAllUsers()
            res.status(200).json(Users);
        } catch (error) {
            console.log(error)
            res.status(500).json({message: 'error fetching users', error})
        }
    }

}
module.exports = new UserController;