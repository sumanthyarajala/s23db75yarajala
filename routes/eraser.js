var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('eraser', { title: 'Search Results of eraser' });
});

module.exports = router;