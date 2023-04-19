var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var eraser_controller = require('../controllers/eraser');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// eraser ROUTES ///
// POST request for creating a eraser.
router.post('/eraser', eraser_controller.eraser_create_post);
// DELETE request to delete eraser.
router.delete('/eraser/:id', eraser_controller.eraser_delete);
// PUT request to update eraser.
router.put('/eraser/:id', eraser_controller.eraser_update_put);
// GET request for one eraser.
router.get('/eraser/:id', eraser_controller.eraser_detail);
// GET request for list of all eraser items.
router.get('/eraser', eraser_controller.eraser_list);
module.exports = router;
// API for our resources
exports.api = function(req, res) {
res.write('[');
res.write('{"resource":"eraser", ');
res.write(' "verbs":["GET","PUT", "DELETE"] ');
res.write('}');
res.write(']')
res.send();
};