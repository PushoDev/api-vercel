// index.js
const express = require("express");
const app = express();
app.get("/api", (req, res) => {
  res.send(`<h1 style="color:blue"> 
		Hola Mundo</h1>`);
});
app.listen(8080, () => {
  console.log("Server started at http://localhost:8080");
});
module.exports = app;
