var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
  res.send("Hiya Friends this is a test route!");
});

module.exports = router;

//
