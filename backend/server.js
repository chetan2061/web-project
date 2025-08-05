// Simple Express Server
const express = require("express");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage
let tasks = [];

// Get all tasks
app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

// Add new task
app.post("/api/tasks", (req, res) => {
  const task = {
    id: Date.now(),
    name: req.body.name,
    status: req.body.status || "todo",
  };

  tasks.push(task);
  res.json(task);
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
