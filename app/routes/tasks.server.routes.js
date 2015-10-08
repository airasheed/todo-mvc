//load the module dependencies


var tasks = require('../../app/controllers/tasks.server.controller.js');

module.exports = function(app) {
    //Set up the 'tasks' base routes
    app.get('/tasks', tasks.list);
    app.post('/tasks', tasks.markAllCompleted);
    app.post('/tasks', tasks.add);
    app.post('/tasks/:task_id', tasks.markCompleted);
    app.delete('/tasks/:task_id', tasks.del);
    app.get('/tasks/completed', tasks.completed);

    // Set up the 'taskId' paramater middleware
    app.param('task_id', tasks.getTask);
};