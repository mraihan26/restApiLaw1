var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/get-all', function(req, res, next) {
  res.status(200).json({
    message: "test-success"
  });
});

module.exports = router;
