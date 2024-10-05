const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    phone: Number,
    email: String,
    address: String,

})
const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel