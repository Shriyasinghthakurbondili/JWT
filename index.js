// var express = require("express") //Used to create a server and APIs
// var mongoose = require("mongoose") //Used to connect Node.js with MonngoDB database

// // Create express app
// // This create a server application app in our backend server
// var app = express()

// // Middleware
// // this tells the server to accept JSON data from requests
// //   or
// // express.json() converts request data into JSON format
// app.use(express.json())

// // Connect to MongoDB
// // This function connects Node.js server->MongoDB database
// // await->wait until database connects
// // try/catch-> handle error
// async function connectToDatabase(){
//     try{
//         await mongoose.connect("mongodb+srv://shriyasinghthakurnithu_db_user:Am0dp0RYhpVZc8yj@cluster0.zcpuqwl.mongodb.net/")
//         console.log("connected to the database")
//     }catch(error){
//         console.log("error", error)
//     }
// }
// // Call the function 
// connectToDatabase()

// // Create Schema=>Schema defines how data should look in database 
// var productSchema = new mongoose.Schema({
//       title : String,
//       description : String,
//       price:Number

// })

// // Create model
// /*  Model is used to perform database operations like 
//          create - POST
//          update - PUT
//          delete - DELET
//          read -   GET*/

// var Product = mongoose.model("product",productSchema)
// //GET API(Read Product)
// // This API gets all products from database
// app.get("/products",async(req,res)=>{
//     var allProducts = await Product.find()
//     res.send({
//         products:allProducts
//     })
// })  

// // POST API(CREATE PRODUCT)
// app.post("/add",async(req,res)=>{
//      // This API adds a new products to database
//      var {title,description,price} = req.body
//     //  This gets data from request body
//     var newProduct = await Product.create({
//         title,
//         description,
//         price
//     })
//     res.send({
//         data:newProduct,
//         message:"new product created"
//     })
// })

// app.put("/update/:id",async(req,res)=>{
//     var{title,description,price} = req.body
//     var updatedProduct = await Product.findByIdAndUpdate(req.params.id,{
//         title,description,price
//     })
//     res.send({
//         data:updatedProduct,
//         message:"product updated"
//     })
// })

// app.delete("/delete/:id",async(req,res)=>{
//     var deletedProduct = await Product.findByIdAndDelete(req.params.id)
//     res.send({
//         data:deletedProduct,
//         message:"product deleted"
//     })
// })
// // Start the server
// var port = 3000
// app.listen(port,()=>{
//     console.log("The server is running")
// })


// var express = require("express")
// var mongoose = require("mongoose")

// var app = express()

// MiddleWare
// app.use(express.json())

// Connect database
// async function connectToDatabase(){
//     try{
//         await mongoose.connect("mongodb+srv://shriyasinghthakurnithu_db_user:Am0dp0RYhpVZc8yj@cluster0.zcpuqwl.mongodb.net/")
//         console.log("Connected to database")
//     }catch{
//         console.log("error",error)
//     }
// }
// connectToDatabase()

// Schema 
// var ProductSchema = new mongoose.Schema({
//     title : String,
//     description : String,
//     price : Number 
// })

// Model
// var Products = mongoose.model("Product",ProductSchema)
// app.get("/products",async(req,res)=>{
//     var allProducts = await Products.find()
//     res.send({Products:allProducts})
// })

// app.post("/add",async(req,res)=>{
//     var{title,description,price} = req.body 
//     var newProduct = await Products.create({
//         title,
//         description,
//         price 
//     })
//     res.send({message:"new Product created", Products: newProduct})
// })

// app.put("/update/:id",async(req,res)=>{
//     var {title,description, price} = req.body
//     var updatedProduct = await Products.findByIdAndUpdate(req.params.id,{
//          title,
//          description,
//          price 
//     })
//     res.status(201)
//     res.send({message:"products are updated", data:updatedProduct})
// })


// app.delete("/delete/:id",async(req,res)=>{
//     var deleteProducts = await Products.findByIdAndDelete(req.params.id)
//     res.status(200)
//     res.send({message:"products are deleted", data:deleteProducts})
// })
// var port = 3000
// app.listen(port,()=>{
//     console.log("Running the server")
// })

// require("dotenv").config()
// var express = require("express")

// var app = express()

// var cors = require("cors")

// var productRoutes = require("./Routes/ProductRoutes")

// const connectToDatabase = require("./Database/db")
// app.use(express.json())
// app.use(cors())
// app.use("/api/productRoutes/",productRoutes)
// // connect to database
// connectToDatabase()

// var port = process.env.PORT 
// app.listen(port,()=>{
//     console.log("The server is running")
// })  

// require("dotenv").config()
// var express = require("express")
// const connectToDataBase = require("./Database/db")

// var productRoutes = require("./Routes/ProductRoutes")

// var app = express()


// app.use(express.json())


// connect to the database

// connectToDataBase()


// app.use("/api/products",productRoutes)

// var port = process.env.PORT

// app.listen(port,()=>{
//     console.log("The server is running");
// }) 

require("dotenv").config()
console.log(process.env.JWT_SECRET)
var express = require("express")
var app = express()
var cors = require("cors")
var userRoutes = require("./Routes/userRoutes")
var connectToDatabase = require("./Database/db")

app.use(express.json())
app.use(cors())
app.use("/api/userRoutes", userRoutes)
connectToDatabase()
var port = process.env.PORT
app.listen(port,()=>{
    console.log("The server is running")
})
