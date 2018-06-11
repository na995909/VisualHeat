// heat.js  supplies information to the view as requested 
// Importing  the ORM to access the database.

var orm = require("../config/orm.js");

var heat = {
  //returns complete list of countries stored in country table
  country_list: function(cb) {
    
    orm.selectAll("country", function(res) {
      cb(res);
    });
  },
  //returns the list of the annual avg temp filtered by country_code
  country_temp: function(country_code,cb) {
    orm.selectCountryTemp(country_code,function(res) {
      cb(res);
    });
  }
};

// Exports the database functions for the controller
module.exports = heat;
