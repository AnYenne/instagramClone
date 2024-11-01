const { default: mongoose } = require('mongoose')
const postModel = require('../models/post.cjs')
const userModel = require('../models/userModel.cjs')

class PostService {
    //fetch all posts of User
    async fetchAllPost(id){
        const posts = await postModel.find({userId: id})
        console.log(id)
        return posts
            
    }
    //create a new post 
    // async createPost(data,id){
    //     const post = await postModel.create(data, data.userId = id)

    // //create a post of User
    // async createAPost(id, body){
    //     const data = await postModel.create()
    // }
}
module.exports = new PostService