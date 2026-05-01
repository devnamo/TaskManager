const express = require("express");
const router = express.Router();

const { createTask, getDashboard } = require("../controllers/taskController");
const authMiddleware = require("../middleware/authMiddleware");

// routes
router.post("/create", authMiddleware, createTask);

router.get("/dashboard", authMiddleware, getDashboard);

module.exports = router;