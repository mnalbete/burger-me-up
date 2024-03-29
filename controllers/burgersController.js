var express = require("express");
var router = express.Router();
const burger = require("./models/burger.js");


router.get("/", function (req, res) {
  burger.all(function (data) {
    // var hbsObject = {
    //   burgers: data
    // };
    // console.log(hbsObject);
    res.render("index", { burgers: data });
  });
});

router.post("/api/burgers", function (req, res) {
  burger.create([
    "burger"
  ], [
    req.body.burger
  ], function (result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    eaten: req.body.eaten
  }, condition, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// router.delete("/api/burgers/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   burger.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// Export routes for server.js to use.
module.exports = router;