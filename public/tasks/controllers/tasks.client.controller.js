
angular.module('tasks')
.controller('taskCtrl', function($scope, $http, tasks) {
        $scope.title = 'Test Title';


        tasks.getAll.then(function (response) {
            $scope.tasks = response.data;
        });


        tasks.getCompleted
            .then(function (response) {
                $scope.cItems = response.data;
            })
            .catch(function (error) {
                console.log(error);
            });



        $scope.markCompleted = function(taskId) {
            tasks.markCompleted(taskId);
        };

        $scope.getAllCompleted = function() {

        };

        $scope.deleteTask = function(task,$index) {
            console.log(task, $index);
            $scope.tasks.splice($index, 1);
            tasks.del(task._id);
        };

        $scope.addTask = function(task) {
            if(!task || task.name == '') {
                console.log("no tasks added");
                return;
            }
            tasks.add(task);
        };

    });

