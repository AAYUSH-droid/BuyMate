const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  forgotPasswords,
} = require("../controllers/userController");
const router = express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("./password/forgot").post(forgotPasswords);

router.route("/logout").get(logout);

module.exports = router;
