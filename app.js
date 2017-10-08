const express = require("express");
const app = express();
const http = require("http");
let port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port);
console.log("Listening on port " + port);
module.exports = app; // for testing
