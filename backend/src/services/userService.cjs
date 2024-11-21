const Users = require('../models/userModel.cjs')
const bcrypt = require('bcrypt');


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
    async register({username,password,email,confirmPassword}){
    try{
       
       const salt = await bcrypt.genSalt(10);
       const hashed = await bcrypt.hash(password, salt)
       const hashedConfirm = await bcrypt.hash(confirmPassword, salt)
    
       // create new user
       const newUser = Users.create({
            username: username,
            email: email,
            password: hashed,
            confirmPassword:hashedConfirm,
       })

       // save new user to DB
    //    const user = await newUser.save()
    //    console.log('data save vao data')
       return newUser
        }
        catch(error){
            res.status(500).json(error)
        }
    }
}

module.exports = new UserService