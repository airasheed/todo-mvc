var express = require('express'),
    http = require('http'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    csrf = require('csurf'),
    errorHandler = require('errorhandler'),
    config = require('./config');


module.exports = function() {

    var app = express();
    require('./mongoskin')(app);

    app.set('port', process.env.PORT || 3000);
    app.set('views', './app/views');
    app.set('view engine', 'ejs');
    //app.use(favicon(path.join('public', 'favicon.ico')));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(methodOverride());

    app.use(cookieParser('CEAF3FA4-F385-49AA-8FE4-54766A9874F1'));
    app.use(session({
        secret : config.sessionSecret,
        resave: true,
        saveUninitialized: true
    }));

    //app.use(csrf());

    app.use(express.static(path.join(__dirname, '../public')));

   /* app.use(function (req, res, next) {
        res.locals._csrf = req.csrfToken();
        return next();
    });*/


    //Load the routing files
    require('../app/routes/index.server.routes.js')(app);
    require('../app/routes/tasks.server.routes.js')(app);

    app.all('*', function (req, res) {
        res.status(404).send();
    });



    // Return the Express application instance
    return app;
};
