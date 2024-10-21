const Users = require('../models/userModel.cjs')

class UserService {

    //Find All users from API
    async fetchAllUsers(){
        var data = await Users.find({})
        return data
    }
   
}

module.exports = new UserService