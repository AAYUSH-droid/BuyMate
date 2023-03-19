const ErrorHandler = require("../utils/errorhander");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  // Wrong Mongodb Id error
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  // Mongoose duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHandler(message, 400);
  }

  // Wrong JWT error
  if (err.name === "JsonWebTokenError") {
    const message = `Json Web Token is invalid, Try again `;
    err = new ErrorHandler(message, 400);
  }

  // JWT EXPIRE error
  if (err.name === "TokenExpiredError") {
    const message = `Json Web Token is Expired, Try again `;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

/*
In errorHandler file in utils we added Error.captureStackTrace(this, this.constructor) captureStackTrace which captures the whole stack 
where the error might be this calling it in this file error.js {error: err.stack} it gives the exact location of err, ****
but calling like {error: err} just gives error message


**o/p when {error: err.stack} is called on line 9
{
    "success": false,
    "error": "Error: Product not found\n    at exports.getProductDetails (/Users/aayushsharma/Desktop/BuyMate/backend/controllers/productController.js:33:17)\n    at processTicksAndRejections (internal/process/task_queues.js:93:5)"
}
*/
