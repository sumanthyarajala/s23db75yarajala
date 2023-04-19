var eraser = require('../models/eraser');
// List of all eraser

// List of all eraser
exports.eraser_list = async function(req, res) {
    try{
    theeraser = await eraser.find();
    res.send(theeraser);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    //List of all eraser
    exports.eraser_list = async function(req, res) {
    try{
    theeraser = await eraser.find();
    res.send(theeraser);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    }
    
// for a specific eraser.
exports.eraser_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await eraser.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
// Handle eraser create on POST.
// for a specific eraser.
exports.eraser_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await eraser.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
// Handle eraser delete form on DELETE.
// Handle eraser delete on DELETE.
exports.eraser_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await eraser.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
//  Handle eraser update form on PUT.
exports.eraser_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await eraser.findById( req.params.id)
    // Do updates of properties
    if(req.body.eraser_type)
    toUpdate.eraser_type = req.body.eraser_type;
    if(req.body.cost) toUpdate.cost = req.body.cost;
    if(req.body.size) toUpdate.size = req.body.size;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };
// VIEWS
// Handle a show all view
exports.eraser_view_all_Page = async function(req, res) {
    try{
    theeraser = await eraser.find();
    res.render('eraser', { title: 'eraser Search Results', results: theeraser });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // / Handle eraser create on POST.
    exports.eraser_create_post = async function(req, res) {
    console.log(req.body)
    let document = new eraser();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"eraser_type":"goat", "cost":12, "size":"large"}
    document.eraser_type = req.body.eraser_type;
    document.cost = req.body.cost;
    document.size = req.body.size;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // Handle a show one view with id specified by query
exports.eraser_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await eraser.findById( req.query.id)
    res.render('eraserdetail',
    { title: 'eraser Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle building the view for creating a eraser.
// No body, no in path parameter, no query.
// Does not need to be async
exports.eraser_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('erasercreate', { title: 'eraser Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    // Handle building the view for updating a eraser.
// query provides the id
exports.eraser_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await eraser.findById(req.query.id)
    res.render('eraserupdate', { title: 'eraser Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    // Handle a delete one view with id from query
exports.eraser_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await eraser.findById(req.query.id)
    res.render('eraserdelete', { title: 'eraser Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };