const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: {type: Schema.ObjectId},
    username: {type: String, default: true },
    email:{type: String, required: true,},
    name:{type: String},
    password:{type: String, required: true},
    confirmPassword:{type: String, required: true},
    bio:{type: String, default: ''},
    sex: {type: String},
    no_of_followers: {type: Number, default: 0},
    no_of_following: {type: Number, default: 0 },
    createAt: {type: Date, default: Date.now}
    

},{collection: 'Users'})


module.exports = mongoose.model('User', userSchema);