// const express = require("express");
// const path = require("path");
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../frontend/index.html"));
// });

// app.use("/static", express.static(path.join(__dirname, "../frontend")));

// app.get("/api/message", (req, res) => {
//   res.json({ message: "Hello from the backend!" });
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

// // post reqiest
// // app.post("/api/login",(req,res))

// app.post("/api/login", (req, res) => {
//   if (req.body.email === "chetan@gmail.com") {
//     res.send("Login successful: ");
//   } else {
//     res.send("Invalid email or password");
//   }
// });

// app.listen(3000, () => console.log("Server running on port 3000"));

const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

app.use("/static/css", express.static(path.join(__dirname, "../frontend/css")));
app.use(
  "/static/javascript",
  express.static(path.join(__dirname, "../frontend/javascript"))
);
app.use(express.json());

// API route
app.get("/api/message", (req, res) => {
  return res.json({ success: true, message: "Hello from the backend!!!" });
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (email !== "123@gmail.com")
    return res
      .status(400)
      .json({ success: false, message: "email not found!" });

  if (password !== "123")
    return res
      .status(400)
      .json({ success: false, message: "Password not matched!" });

  return res.status(200).json({
    success: true,
    message: "Login successful!",
    data: { email, password },
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
