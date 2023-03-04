const Product = require("../models/productModel");

//Create product -- Admin
exports.createProduct = async (req, res, next) => {
  const products = await Product.create(req.body);

  res.status(201).json({
    success: true,
    products,
  });
};

//GET All Products
exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({
    //message: "route is working fine",
    success: true,
    products,
  });
};
