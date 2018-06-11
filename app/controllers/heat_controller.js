var express = require("express");

var router = express.Router();

// Imports the model (heat.js) to use its database functions.
var heat = require("../models/heat.js");

// Creates all our routes and sets up logic within those routes where required.
// renders main page when a GET request is made to the homepage
router.get("/", function(req, res) {
  heat.country_list(function(data) {
    var hbsObject = {
      heat: data
    };
    //console.log(hbsObject);

    // pass local parameter to the view and send the rendered view to the client
    res.render("index", hbsObject);
  });
});

// API function to return the list of the annual avg temp filtered by country
router.get("/api/:country", function(req, res) {
  var country_code = req.params.country;
  heat.country_temp(country_code,function(data) {
    var hbsObject = {
      heat: data
    };
   // console.log(hbsObject);
    //send json response to the client
    res.send(hbsObject);
  });
});

// API function to return the list of the annual avg temp filtered by country
router.post("/api/:country", function(req, res) {
  var country_code = req.params.country;
  heat.country_temp(country_code,function(data) {
    var hbsObject = {
      heat: data
    };
   // console.log(hbsObject);
   //send json response to the client
    res.send(hbsObject);
  });
});



// Export routes for server.js to use.
module.exports = router;
