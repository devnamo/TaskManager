/*const express = require("express");
const router = express.Router();

const { createTask } = require("../controllers/taskController");
const authMiddleware = require("../middleware/authMiddleware");

// protected route
router.post("/create", authMiddleware, createTask);

module.exports = router;*/

const express = require("express");
const router = express.Router();

const { createTask, getDashboard } = require("../controllers/taskController");
const authMiddleware = require("../middleware/authMiddleware");

// routes
router.post("/create", authMiddleware, createTask);

// 👉 ADD THIS
router.get("/dashboard", authMiddleware, getDashboard);

module.exports = router;