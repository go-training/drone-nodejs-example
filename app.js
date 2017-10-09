const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World! Drone CI/CD");
});

app.get("/user", function(req, res) {
  res.status(200).json({ name: "tobi" });
});

// listen 8080 port
app.listen(port);
console.log("Listening on port " + port);

module.exports = app; // for testing
