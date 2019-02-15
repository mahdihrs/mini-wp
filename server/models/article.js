const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String
    },
    created_at: {
        type: Date,
        default: new Date
    }
})

const Article = mongoose.model('Article', articleSchema)

module.exports = Article