var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('eraser', { title: 'Search Results of eraser' });
});

module.exports = router;

var express = require('express');
const eraser_controlers= require('../controllers/eraser');
var router = express.Router();
/* GET eraser */
router.get('/', eraser_controlers.eraser_view_all_Page );
module.exports = router;
// GET request for one eraser.
router.get('/eraser/:id', eraser_controlers.eraser_detail);

/* GET detail eraser page */
router.get('/detail', eraser_controlers.eraser_view_one_Page);

/* GET create eraser page */
router.get('/create', eraser_controlers.eraser_create_Page);
/* GET create update page */
router.get('/update', eraser_controlers.eraser_update_Page);
// * GET delete eraser page */
router.get('/delete', eraser_controlers.eraser_delete_Page);