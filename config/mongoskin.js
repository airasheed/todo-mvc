var mongoskin = require('mongoskin'),
    config = require('./config');

module.exports = function(app) {
    var db = mongoskin.db(config.db, {safe: true});

    app.use(function(req, res, next) {
        req.db = {};
        console.log(db.collection);
        req.db.tasks = db.collection('tasks');
        next();
    });

    return db;
};