const express = require('express');
const controller = require('../controllers/mainController');

//I'm unaware if naming the router the same as the other one would cause issue
//I don't imagine it would, but better safe than sorry?
const mainRouter = express.Router();

//GET /: send the user to the main landing page
mainRouter.get('/', controller.index);

//GET /about: send about details
mainRouter.get('/about', controller.about);

//GET /contact: send contact details
mainRouter.get('/contact', controller.contact);

module.exports = mainRouter;