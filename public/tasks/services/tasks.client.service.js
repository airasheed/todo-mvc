angular.module('tasks')
    .factory('tasks', ['$http', function ($http) {


        return {


            getAll : $http.get('/tasks'),
            getOne : function(taskId) {
                return $http.get('/tasks/' + taskId);
            },
            add: function(task) {
                task.completed = false;
                if(!task.name) {
                    return;
                }
                return $http.post('/tasks', task);
            },
            del: function(taskId) {
                return $http.delete('/tasks/' + taskId);
            },
            markCompleted : function (task) {
                task.completed = true;
                return $http.post('/tasks/' + task._id, task);
            },
            getCompleted: $http.get('/completed')
        }


    }]);