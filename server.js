/*
* Set the 'NODE_ENV' variable
* */

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Load the module dependencies
var express = require('./config/express');

//Create a new Express application instance
var app = express();

//Log the server status to the console
app.listen(3000, function() {
    console.log('Server running at http://localhost:3000');
});


//Use the module.exports property to expose our Express application instance for external usage
module.exports = app;
