const userRouter = require('./userRouter.cjs')

function router(app){

    app.use('/api/users',userRouter)

    app.use('/', (req,res)=>{
        res.render('home')
    })
}
module.exports = router