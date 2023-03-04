const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
} = require("../controllers/productController");

const router = express.Router();

//get all products
router.route("/products").get(getAllProducts);

//create products
router.route("/product/new").post(createProduct);

//update porducts(put req)
router.route("/product/:id").put(updateProduct);

module.exports = router;
