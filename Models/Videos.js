const mongoose = require('mongoose')

const videoSchema = new mongoose.Schema({
    category:String,
    subCategory:String,
    title:String,
    desc:String,
    link:String,
    thumbnail:String
})

module.exports = mongoose.model('video',videoSchema)