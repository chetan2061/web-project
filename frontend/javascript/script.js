// Simple Todo App JavaScript
let tasks = [];

// Add new task
function addTask() {
  const taskName = document.getElementById("taskName").value;
  if (!taskName) return;

  const newTask = {
    id: Date.now(),
    name: taskName,
    status: "todo",
  };

  // Send to backend
  fetch("http://localhost:3000/api/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTask),
  })
    .then((response) => response.json())
    .then((task) => {
      tasks.push(task);
      renderTasks();
      document.getElementById("taskName").value = "";
    });
}

// Render tasks in todo column
function renderTasks() {
  const todoContainer = document.getElementById("todoTasks");
  todoContainer.innerHTML = "";

  tasks.forEach((task) => {
    const taskDiv = document.createElement("div");
    taskDiv.className = "task-card";
    taskDiv.innerHTML = `<h4>${task.name}</h4>`;
    todoContainer.appendChild(taskDiv);
  });
}

// Load tasks on page load
document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:3000/api/tasks")
    .then((response) => response.json())
    .then((data) => {
      tasks = data;
      renderTasks();
    });
});
