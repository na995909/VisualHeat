var express = require("express");
var bodyParser = require("body-parser");


var port = process.env.PORT || 8080;
var app = express();

 // Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true}));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");
//set default path to views folder
app.set("views", "app/views/");
//path to layout is expected to be views/layouts without
//taking into consideration the actual placement of the views folder as configured by line below
//layoutsDir: "app/views/layouts" will set the actual path to the layout folder
app.engine("handlebars", exphbs({ defaultLayout: "main" ,layoutsDir: "app/views/layouts"}));
app.set("view engine", "handlebars");

// Importing routes and giving the server access to them.
var routes = require("./app/controllers/heat_controller.js");

app.use("/",routes);

app.listen(port, function() {
  console.log("App now listening at localhost:" + port);
});

