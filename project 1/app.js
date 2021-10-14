//require modules
const morgan = require('morgan');
const express = require('express');
const methodOverride = require('method-override');
const mainRoutes = require('./routes/mainRoutes');
const connectionRoutes = require('./routes/connectionRoutes');


//Create our application
const app = express();


//Configure application settings
let port = 3000;
let host = 'localhost';
app.set('view engine', 'ejs'); //gives folder and file type


//Middleware mounting
app.use(express.static('public')); //Provide our static files from the public folder
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny')); //Log requests in terminal
app.use(methodOverride('_method'));

//Create our routes
app.get('/', (req, res)=>{
    res.render('index');
})

//Sets our main navigation to / and our connections to /connections
app.use('/', mainRoutes);
app.use('/connections', connectionRoutes);

//Error handling for 404
app.use((req, res, next) => {
    let err = new Error('The server cannot locate ' + req.url);
    err.status = 404;
    next(err);
})

//Error handling for 500 errors
//I saw a lot of this screen during this assignment
app.use((err, req, res, next)=>{
    console.log(err.stack);
    if(!err.status) {
        err.status = 500;
        err.message = ("Internal Server Error");
    }

    res.status(err.status);
    res.render('error', {error: err})
});

//start the server
app.listen(port, host, ()=>{
    console.log('Server is running on port', port);
})