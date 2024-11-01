const userRouter = require('./userRouter.cjs');
const postRouters = require('./postRouters.cjs');

function router(app){

    //router to users
    app.use('/api/users',userRouter)

    //router to posts
    app.use('/api/posts',postRouters)


    //router to home
    app.use('/', (req,res)=>{
        res.render('home')
    })
}
module.exports = router