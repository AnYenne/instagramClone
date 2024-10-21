const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const postSchema = new Schema({
    userId:{type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    imageURL: {type: String, required: true},
    caption:{type: String, default: ''},
    likes: {type: Number, default: 0},
    comments: {type: String, default: ''},
    createAt:{type: Date, default: Date.now}
    

})


module.export = mongoose.model('Post', postSchema);