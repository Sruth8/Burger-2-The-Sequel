var express = require("express");
//var mysql = require("mysql");
//var path = require("path");
var bodyParser = require("body-parser");
//var Sequelize = require("sequelize");
var methodOverride = require("method-override");

var db = require("./models");
var routes = require("./controllers/burgers_controller");

var PORT = process.env.PORT || process.env.DEV_PORT || 8080;


var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "public"));
app.get("/", (req, res) => res.send("INDEX"));
app.use(express.static('public'));
app.use(routes);

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.urlencoded({
  extended: false
}));

// Set Handlebars.
app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// this will refer back to the burgers_controller.js
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);
app.use("/undate", routes);
app.use("/create", routes);



// app.listen(PORT, function () {
//   console.log("App listening on PORT: " + PORT);
// });



db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("listenning on http://localhost:" + PORT);
  });
});
//const sqdatabase = require("./config/seqdatabase");

//const routes = require("./controller/burger_controller");


//Test DB
// sqdatabase.authenticate()
// .then(() => console.log("Database connected"))
// .catch(err => console.log("Error:" + err))


