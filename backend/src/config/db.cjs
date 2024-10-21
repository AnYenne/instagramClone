const mongoose = require('mongoose');
const port = process.env.PORT || 5000
async function connectDb (){
 try{
    await mongoose.connect(`mongodb://127.0.0.1:27017/igDatabase`,{
      
    }
      
    )
    console.log('connect db successfull')
 }
 catch(error){
    console.error('connect db failed', error.message)
 }
}

module.exports = connectDb