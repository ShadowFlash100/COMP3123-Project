const mongoose = require('mongoose')

const Schema = mongoose.Schema;

let video = new Schema({
    title: String,
    runTime: String,
    genre: String,
    rating: String,
    director: String,
    status: String
})

module.exports = mongoose.model('video', video)