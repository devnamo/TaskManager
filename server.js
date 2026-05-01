/*const express = require("express");

const app = express();

// simple route
app.get("/", (req, res) => {
  res.send("API Running!");
});

// server start
const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});*/

/*const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// test route
app.get("/", (req, res) => {
  res.send("API Running!");
});

// connect MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected!"))
.catch((err) => console.log(err));

// server start
const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});*/

/*const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// import routes
const authRoutes = require("./routes/authRoutes");

// middleware
app.use(express.json());
app.use(cors());

// test route
app.get("/", (req, res) => {
  res.send("API Running!");
});

// use routes
app.use("/api/auth", authRoutes);

// connect MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected!"))
.catch((err) => console.log(err));

// server start
const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});*/

/*const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// import routes
const authRoutes = require("./routes/authRoutes");

// middleware import
const authMiddleware = require("./middleware/authMiddleware");

// middleware
app.use(express.json());
app.use(cors());

// test route
app.get("/", (req, res) => {
  res.send("API Running!");
});

// use routes
app.use("/api/auth", authRoutes);

// protected test route
app.get("/api/protected", authMiddleware, (req, res) => {
  res.json({
    message: "You are authorized!",
    user: req.user
  });
});

// connect MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected!"))
.catch((err) => console.log(err));

// server start
const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});*/

/*const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// import routes
const authRoutes = require("./routes/authRoutes");

// project routes
const projectRoutes = require("./routes/projectRoutes");

// middleware import
const authMiddleware = require("./middleware/authMiddleware");

// middleware
app.use(express.json());
app.use(cors());

// test route
app.get("/", (req, res) => {
  res.send("API Running!");
});

// use routes
app.use("/api/auth", authRoutes);

// project routes usage
app.use("/api/projects", projectRoutes);

// protected test route
app.get("/api/protected", authMiddleware, (req, res) => {
  res.json({
    message: "You are authorized!",
    user: req.user
  });
});

// connect MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected!"))
.catch((err) => console.log(err));

// server start
const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});*/

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// import routes
const authRoutes = require("./routes/authRoutes");

// project routes
const projectRoutes = require("./routes/projectRoutes");

// 👉 ADD THIS (task routes)
const taskRoutes = require("./routes/taskRoutes");

// middleware import
const authMiddleware = require("./middleware/authMiddleware");

// middleware
app.use(express.json());
app.use(cors());

// test route
app.get("/", (req, res) => {
  res.send("API Running!");
});

// use routes
app.use("/api/auth", authRoutes);

// project routes usage
app.use("/api/projects", projectRoutes);

// 👉 ADD THIS (task routes usage)
app.use("/api/tasks", taskRoutes);

// protected test route
app.get("/api/protected", authMiddleware, (req, res) => {
  res.json({
    message: "You are authorized!",
    user: req.user
  });
});

// connect MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected!"))
.catch((err) => console.log(err));

// server start
const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});