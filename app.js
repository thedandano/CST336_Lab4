// imports express library
const express = require("express");
// is needed to access express methods
const app = express();
//allows us to render html
app.engine("html", require("ejs").renderFile);
//specify public folder (the folder that holds the static files like css and images)
app.use(express.static("public"));
//local dev variables
require("dotenv").config();

//global variables
const PORT = process.env.PORT;
const IP = process.env.IP;

//starting server
app.listen(PORT, IP, function () {
  console.log("Express server is running...");
});

//routes
app.get("/", function (req, res) {
  res.render("index.html", { page_name: "home" });
});

app.get("/mercury", function (req, res) {
  res.render("mercury.html", { page_name: "mercury" });
});

app.get("/venus", function (req, res) {
  res.render("venus.html", { page_name: "venus" });
});

app.get("/earth", function (req, res) {
  res.render("earth.html", { page_name: "earth" });
});

app.get("/mars", function (req, res) {
  res.render("mars.html", { page_name: "mars" });
});
