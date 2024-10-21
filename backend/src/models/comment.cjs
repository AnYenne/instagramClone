const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const commentSchema = new Schema ({
    commentId: {type: mongoose.Schema.Types.ObjectId, required: true},
    userId: {type: mongoose.Schema.Types.ObjectId, required: true},
    text:{type: String, required: true},
    createAt: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Comment', commentSchema)