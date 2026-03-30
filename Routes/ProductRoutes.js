// var express = require("express")

// const {getAllProducts, CreateProduct} = require("../Controllers/ProductController")

// var router = express.Router()
// const upload = require("../Utils/upload");

// router.post("/addproducts",upload.array("image,5"),CreateProduct)

// router.post("/addproduct",CreateProduct)
// router.post("/addproduct", upload.single("image"), CreateProduct);
// router.get("/getAllProducts", getAllProducts)
// router.post("/addproduct", upload.any(), CreateProduct)
// module.exports = router


var express = require("express")
var router = express.Router()

const {getAllProducts, CreateProducts, UpdateProducts} = require('../Controllers/ProductController')

router.get("/getAllProducts", getAllProducts)
router.post("/addProducts", CreateProducts)
router.put("/updateProducts/:id", UpdateProducts)
module.exports = router;