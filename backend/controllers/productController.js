const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncErrors");
//Create product -- Admin
exports.createProduct = catchAsyncError(async (req, res, next) => {
  const products = await Product.create(req.body);

  res.status(201).json({
    success: true,
    products,
  });
});

//GET All Products
// exports.getAllProducts = async (req, res) => {
//   const products = await Product.find();
//   res.status(200).json({
//     //message: "route is working fine",
//     success: true,
//     products,
//   });
// };
//catchAsyncError another way to using tryCatch funcanitlity
exports.getAllProducts = catchAsyncError(async (req, res) => {
  const products = await Product.find();
  res.status(200).json({
    //message: "route is working fine",
    success: true,
    products,
  });
});

//Get Product details
exports.getProductDetails = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    // return res.status(500).json({
    //   success: false,
    //   message: "Product not found",
    // });
    return next(new ErrorHandler("Product not found", 404));
  }

  // if (!product) {
  //   return next(new ErrorHandler("Product not found", 404));
  // }

  res.status(200).json({
    success: true,
    product,
  });
});

//Update product (put req) --Admin route
exports.updateProduct = catchAsyncError(async (req, res, next) => {
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
});

//Delete Product

exports.deleteProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  //product removed
  // await product.remove();
  await product.deleteOne();

  res.status(200).json({
    success: true,
    message: "Producted Deleted Succesfully",
  });
});
