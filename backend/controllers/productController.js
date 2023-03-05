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

//Update product (put req) --Admin route

exports.updateProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }

  //product updated
  product = await Product.findById(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
};

//Delete Product

exports.deleteProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }

  //product removed
  // await product.remove();
  await product.deleteOne();

  res.status(200).json({
    success: true,
    message: "Producted Deleted Succesfully",
  });
};
