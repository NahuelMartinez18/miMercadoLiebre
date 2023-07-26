//! Clases 17 - 18 - 19 - 20 - 21
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => console.log("Servidor corriendo en puerto: " + PORT));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "home.html"))
);

app.post("/", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "home.html"))
);

app.get("/register", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "register.html"))
);

app.get("/login", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "login.html"))
);



