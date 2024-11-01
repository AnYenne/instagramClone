const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    id: {type: Schema.ObjectId},
    userId:{type: Schema.Types.ObjectId, ref: 'User', required: true},
    imageURL: {type: String, required: true},
    caption:{type: String, default: ''},
    likes: {type: Number, default: 0},
    comments: {type: String, default: ''},
    createAt:{type: Date, default: Date.now}
    

},{collection: 'Posts'})

module.exports = mongoose.model('Post', postSchema);