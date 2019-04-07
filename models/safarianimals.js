// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");


// create safarianimal object with different functions inside
var safariAnimal = {
  all: function(cb) {
    orm.all("safarianimals", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("safarianimals", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("safarianimals", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("safarianimals", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = safariAnimal;
