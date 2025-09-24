

import express from "express";

const app = express();
const port = 4000;

// Middleware to parse JSON bodies
app.use(express.json());

const password = "sitabbja123";

// Middleware to check password for POST requests
app.use((req, res, next) => {
  // Only check for POST requests
  if (req.method === "POST") {
    if (req.body.pass !== password) {
      return res.status(401).send({ success: false, message: "Password does not match" });
    }
  }
  next();  // 
});

// POST request handler at "/"
app.post("/", (req, res) => {
  console.log("Received data:", req.body);
  res.send({ success: true, received: req.body });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}...`);
});


