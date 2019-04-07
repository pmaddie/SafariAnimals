var express = require("express");
//handles routing
var router = express.Router();

// Import the model (cat.js) to use its database functions.
var safariAnimal = require("../models/safarianimals");




// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  safariAnimal.all(function(data) {
    var hbsObject = {
        safarianimals : data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/safarianimal", function(req, res) {
    console.log("Request body: " + req.body);
    //   refernce method on models-srfaianimals.js b/c requiring models here, above
    safariAnimal.create([
    "name", "seen"
  ], [
    //reference to the request thats coming from the front end.
    req.body.name, req.body.seen
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/animals/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  safariAnimal.update({
    hasSeen: req.body.seen
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/animals/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  safariAnimal.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;

//requiring the js from models. using the all method