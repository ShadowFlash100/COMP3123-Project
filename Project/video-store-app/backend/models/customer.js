const mongoose = require('mongoose')

const Schema = mongoose.Schema;

let customer = new Schema({
    firstName: String,
    lastName: String,
    address: String,
    city: String,
    phone: String,
    status: String,
    video:String
})

module.exports = mongoose.model('customer', customer)