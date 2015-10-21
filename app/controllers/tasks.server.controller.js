
// Function to get one Task
exports.getTask = function(req,res,next,taskId) {
    req.db.tasks.findById(taskId, function (error, task) {

        if (error) return next(error);
        if (!task) return next(new Error('Task is not found.'));

        req.task = task;
        return next();
    });
};
/*Get Individual Task*/
exports.get = function(req,res,next) {
    res.json(req.task);
};

exports.list = function(req,res,next) {

    req.db.tasks.find().toArray(function (error, tasks) {
        if (error) return next(error);

        /*res.render('tasks', {
            title: 'Todo List',
            tasks: tasks || []
        });*/

        res.json(tasks || []);
    });

};

exports.add  = function(req, res, next) {
    if(!req.body || !req.body.name) {
        return next(new Error('No data provided.'));
    }

    req.db.tasks.save({
        name: req.body.name,
        completed: false
    }, function(error, task) {
        if (error) return next(error);
        if (!task) return next(new Error('Failed to save'));
        console.info('Added %s with id=%s', task.name, task.id);

        res.json(task);
    });
};

exports.markAllCompleted = function(req,res,next) {
    if(!req.body.all_done || req.body.all_done !== 'true') {
        return next();
    }
    req.db.tasks.update({
        completed: false
    }, {$set: {
        completed: true
    }},
        {multi: true}, function(error,count) {
            if (error) return next(error);
            console.info('Marked %s tasks(s) completed.', count);
            res.redirect('/tasks');
        })
};

exports.completed = function(req,res,next) {

    req.db.tasks.find({
        completed: true
    }).toArray(function (error, tasks) {
        res.json(tasks || []);
    });
};

exports.markCompleted = function(req, res, next) {
/*    //if (!req.body.completed) return next(new Error('Param is missing.'));
    var completed = req.body.completed === 'true';*/
    req.db.tasks.updateById(req.task._id, {$set: {completed: true}}, function(error, count) {
        if (error) return next(error);
        if (count !==1) return next(new Error('Something went wrong.'));
        console.info('Marked task %s with id=%s completed.', req.task.name, req.task._id);
        res.redirect('/tasks');
    })
};

exports.del = function(req,res,next) {
    req.db.tasks.removeById(req.task._id, function (error, count) {
        if (error) return next(error);
        if(count !== 1) {
            return next(new Error('Something went wrong.'));
        }
        console.info('Deleted task %s with id=%s completed.', req.task.name, req.task._id);
        res.status(204).send();
    });
};