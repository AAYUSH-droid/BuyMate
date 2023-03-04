const express = require("express");
const {
  getAllProducts,
  createProduct,
} = require("../controllers/productController");

const router = express.Router();

//get all products
router.route("/products").get(getAllProducts);

//create products
router.route("/product/new").post(createProduct);

//update porducts

module.exports = router;
