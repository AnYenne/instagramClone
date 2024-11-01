const Users = require('../models/userModel.cjs')

class UserService {

    //Find All users from API
    async fetchAllUsers(){
        var data = await Users.find({})
        return data
    }

    //Find only 1 user from API
    async fetchUser(id){
        var data = await Users.find({_id: id})
        return data
    }
   
}

module.exports = new UserService