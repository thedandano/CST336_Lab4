// imports express library
const express = require("express");
// is needed to access express methods
const app = express();
//allows us to render html
app.engine("html", require("ejs").renderFile);
//specify public folder (the folder that holds the static files like css and images)
app.use(express.static("public"));

//global variables
const PORT = process.env.PORT;
const IP = process.env.IP;

//routes
app.get("/", function (req, res) {
  // res.send("It works!"); // not practical lot of html code
  res.render("index.html");
});

//starting server
app.listen(PORT, IP, function () {
  console.log("Express server is running...");
});

// handles get requests for each page
app.get("/", function (req, res) {
  res.send("It works!");
});

app.get("/mercury", function (req, res) {
  // res.send("This will be Mercury web page!");
  res.render("mercury.html");
});

app.get("/venus", function (req, res) {
  res.send("This will be Venus web page!");
});
