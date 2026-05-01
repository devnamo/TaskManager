const express = require("express");
const router = express.Router();

const { createProject } = require("../controllers/projectController");
const authMiddleware = require("../middleware/authMiddleware");

// protected route
router.post("/create", authMiddleware, createProject);

module.exports = router;