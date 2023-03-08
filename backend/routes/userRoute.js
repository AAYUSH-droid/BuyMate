const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  forgotPasswords,
  getUserDetails,
  getAllUsers,
  getsingleUser,
} = require("../controllers/userController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("./password/forgot").post(forgotPasswords);

router.route("/logout").get(logout);

router.route("/me").get(isAuthenticatedUser, getUserDetails);

//password update
//profile update

router
  .route("/admin/users")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllUsers);

router
  .route("/admin/user/:id")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getsingleUser);

module.exports = router;
