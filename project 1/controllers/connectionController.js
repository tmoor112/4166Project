const model = require('../models/connection');
exports.index = (req, res)=>{
    let connections = model.find();
    let categories = model.getCategory();
    //Providing both connections and categories to the controller so
    //that we can parse through both arrays
    res.render('./connection/index', {connections:connections, categories:categories});
};

//Displays our create a new connection page
exports.new = (req, res)=>{
    res.render('./connection/new');
};

//Generate a new connection
exports.create = (req, res)=>{
    let connection = req.body;
    model.save(connection);
    res.redirect('/connections');
};

//Shows the connection based on id
exports.show = (req, res, next)=>{
    let id = req.params.id;
    let connection = model.findById(id);

    if(connection) {
        res.render('./connection/show', {connection});
    } else {
        let err = new Error('Cannot find a connection with id ' + id);
        err.status = 404;
        next(err);
    }
    
};

//Displays edit page
exports.edit = (req, res, next)=>{
    let id = req.params.id;
    let connection = model.findById(id);

    if(connection) {
        res.render('./connection/edit', {connection});
    } else {
        let err = new Error('Cannot find a connection with id ' + id);
        err.status = 404;
        next(err);
    }
};

//Handles the backend editing of our connections
exports.update = (req, res, next)=>{
    let connection = req.body;
    let id = req.params.id;
    if(model.updateById(id, connection)) {
        res.redirect('/connections/' + id);
    } else {
        let err = new Error('Cannot find a connection with id ' + id);
        err.status = 404;
        next(err);
    }
};

//Deletes our connection
exports.delete = (req, res, next)=>{
    let id = req.params.id;
    if(model.deleteById(id)) {
        res.redirect('/connections');
    } else {
        let err = new Error('Cannot find a connection with id ' + id);
        err.status = 404;
        next(err);
    }
};