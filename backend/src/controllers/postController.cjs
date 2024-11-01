const postService = require('../services/postService.cjs');

class PostController {

    //fetch all posts of user
    async getAllPosts(req,res,next){
       try{
            const postsOfUser = await postService.fetchAllPost(req.params.id);
            res.status(200).json(postsOfUser)
            console.log('tim duoc tu id')

       }catch(error){
            console.log('cannot find ')
            res.status(500).json('server error')
       }
    }
//     // a user created a post
//     async createAPost(req, res,next){
//           const newPost = await postService.createPost(req.body, req.param.id);
//           res.status(200).json(newPost)
//           console.log('da tao 1 post')

//           }catch(error){
//                console.log('cannot find ')
//                res.status(500).json('server error')
//           }


    

}

module.exports = new PostController;