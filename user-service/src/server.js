const express = require("express");
const app = express();
const PORT = 3001;

app.use(express.json());

let users = [
  { id: 1, name: "Carolina" },
  { id: 2, name: "Roberto" },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.status(201).json(newUser);
});
app.get("/health", (req, res) => {
  res.status(500).send("Failing health check intentionally");
});

app.listen(PORT, () => {
  console.log(`User service running on port ${PORT}`);
});
