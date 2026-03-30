// var Product = require("../Model/ProductSchema")
// var { cloudinary } = require("../Utils/cloudinary")

// var getAllProducts = async(req,res)=>{
//     try{
//         var allproducts = await Product.find()
//         res.send({message:allproducts})
//     }catch(error){
//         console.log("error",error)
//         res.status(500).send({message:"Error fetching products"})
//     }
// }
// var CreateProduct = async (req, res) => {
//     try {
//         console.log("FILES:", req.files)

//         var { title, description, price } = req.body

//         if (!title || !description || !price) {
//             return res.status(400).send({
//                 message: "All fields required"
//             })
//         }

//         // 🔥 IMPORTANT FIX
//         if (!req.files || req.files.length === 0) {
//             return res.status(400).send({
//                 message: "File not received. Check Postman."
//             })
//         }

//         let file = req.files[0]   // 👈 TAKE FIRST FILE

//         var uploadedImage = await cloudinary.uploader.upload(file.path, {
//             folder: "products"
//         })

//         var newProducts = await Product.create({
//             title,
//             description,
//             price,
//             image: uploadedImage.secure_url
//         })

//         res.send({
//             message: "Added New Product",
//             data: newProducts
//         })

//     } catch (error) {
//         console.log("error", error)
//         // res.status(500).send({ message: "Error creating product" })
//     }
// }

// module.exports = {getAllProducts, CreateProduct}

var Product = require("../Model/ProductSchema")

// Get with Query Params
var getAllProducts = async(req,res)=>{
    try{
        var{price,category,brand} = req.query 
        var query={}
        // filter by price
        if(price){
            query.price = {$lte: Number(price)}
        }
        if(category){
            query.category = category 
        }
        if(brand){
            query.brand = brand
        }

        var allProducts = await Product.find(query)
        res.send({message: "Products fetched", data:allProducts})
    }catch(error){
        console.log("error",error)
    }
}

const CreateProducts = async(req,res)=>{
    try{
        var {name, price, category, brand} = req.body;

        const newProduct = new Product({
            name,
            price,
            category,
            brand
        })
        
        const savedProduct = await newProduct.save(); 

        res.status(201).json({
            message: "Product created successfully",
            data: savedProduct
        });

    }
    catch(error){
        console.log("error", error);

        res.status(500).json({
            message: "Error creating product",
            error: error.message
        });
    }
}
const UpdateProducts = async(req,res)=>{
    try{
    var {name,price,category,brand} = req.body
    var updatedProducts = await Product.findByIdAndUpdate(req.params.id,
            {name,price,category,brand},
            {new:true} //without this line will not get new products you will get old products
    );
    if(!updatedProducts){
        return res.status(404).json({
            message: "Not Found"
        })
    }
    res.status(200).json({
       message: "Successfully products are updated", data: updatedProducts
    })
    }catch(error){
        console.log("error",error)

        res.status(500).json({
            message : "Getting error while updating the products",
            error : error.message,
        });
    }
}
module.exports = {
    getAllProducts, CreateProducts, UpdateProducts
}













































































































































