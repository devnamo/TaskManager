/*const express = require("express");
const router = express.Router();

const { signup } = require("../controllers/authController");

// signup route
router.post("/signup", signup);

module.exports = router;*/

const express = require("express");
const router = express.Router();

const { signup, login } = require("../controllers/authController");

// routes
router.post("/signup", signup);
router.post("/login", login); // 👈 ADD THIS

module.exports = router;