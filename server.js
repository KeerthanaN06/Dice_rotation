const express = require('express');
const app = express();
app.get("/index.html", function (req, res) {
  res.sendFile(__dirname+ "/"+ "index.html");
});
app.get("/style.css", function (req, res) {
  res.sendFile(__dirname + "/" + "style.css");
});
app.get("/script.js", function (req, res) {
  res.sendFile(__dirname + "/" + "script.js");
});
app.listen(3001, () => {
  console.log("server is initiated");
});
app.use(express.static('public'));
app.use('/images', express.static('images'));