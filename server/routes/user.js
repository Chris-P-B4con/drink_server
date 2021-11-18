const router = require("express").Router();
const { check, body } = require("express-validator/check");


const userController = require("../controller/user");

router.post(
  "/login",
  check("email")
    .isEmail()
    .withMessage("Please enter a valid email.")
    .normalizeEmail(),
  userController.postLogin
);

router.post("/register",userController.postRegister);

router.get("/logout", userController.logout)
module.exports = router;
