const Task = require("../models/Task");

// CREATE TASK
exports.createTask = async (req, res) => {
  try {
    const { title, description, projectId, assignedTo, dueDate } = req.body;

    const task = await Task.create({
      title,
      description,
      project: projectId,
      assignedTo,
      dueDate
    });

    res.json({
      message: "Task created",
      task
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DASHBOARD
exports.getDashboard = async (req, res) => {
  try {
    const total = await Task.countDocuments();

    const completed = await Task.countDocuments({
      status: "completed"
    });

    const pending = await Task.countDocuments({
      status: "pending"
    });

    res.json({
      total,
      completed,
      pending
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};