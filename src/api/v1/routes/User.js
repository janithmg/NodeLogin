// --------------Thired party libraries & modules--------------
const express = require("express");

// --------------Custom libraries & modules------------
const { UserRegister } = require("../controllers");

// --------------Initialize the router-----------------
const router = express.Router();

// User registration
// router.post("http://localhost:3300/api/users/register" , UserRegister);
router.post("/register", UserRegister);
module.exports = router;
