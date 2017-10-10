const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send(
    "<h1 style='text-align: center; font-size: 64px'>This is k8s Demo site from node.js project</h1>"
  );
});

app.get("/user", function(req, res) {
  res.status(200).json({ name: "appleboy" });
});

// listen 8080 port
app.listen(port);
console.log("Listening on port " + port);

module.exports = app; // for testing
