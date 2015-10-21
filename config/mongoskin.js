var mongoskin = require('mongoskin'),
    config = require('./config');

module.exports = function(app) {
    console.log(config.db);
    var db = mongoskin.db(config.db, {w: 1});

    app.use(function(req, res, next) {
        req.db = {};
        console.log(db.collection);
        req.db.tasks = db.collection('tasks');
        next();
    });

    return db;
};