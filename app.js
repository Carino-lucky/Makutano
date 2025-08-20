const express = require("express");
const app = express();
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Lucky@6148",
  database: "socialapp",
});

// routes
app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.get("/users", (req, res) => {
  console.log(req.query.id);
  console.log(req.query.person);
  connection.query("SELECT * FROM users", (dbarr, result) => {
    if (dbarr) {
      return res.status(500).send("error retrieving users" + dbarr);
    }
    res.render("users.ejs", { users: result });
  });
});

// 404
app.use((req, res) => {
  res.status(404).send("page not found");
});
// start the app
app.listen(3003, () => console.log("app running on http://127.0.0.1:3003"));
