// imports express library
const express = require("express");
// is needed to access express methods
const app = express();

//routes
app.get("/", function (req, res) {
  res.send("it works!");
});

//starting server
app.listen(process.env.PORT, process.env.IP, function () {
  console.log("Express server is running...");
});
