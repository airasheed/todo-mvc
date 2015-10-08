//Load dependencies
var index = require('../../app/controllers/index.server.controller.js');

module.exports = function(app) {
    app.get('/', index.render);
};