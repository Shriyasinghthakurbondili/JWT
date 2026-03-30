// var mongoose = require("mongoose")

// var productSchema = new mongoose.Schema({
//     title:String,
//     description:String,
//     price:Number,
//     image:String   // ✅ FIXED
// })

// var Product = mongoose.model("products",productSchema)

// module.exports = Product

// var mongoose = require("mongoose")

// var productSchema = new mongoose.Schema({
//     name:String,
//     price:Number,
//     category:String,
//     brand:String,
// })

// var Product = mongoose.model("products",productSchema)

// module.exports = Product

var mongoose = require("mongoose")

var userSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String
}) 

var User = mongoose.model("users",userSchema)

module.exports = User