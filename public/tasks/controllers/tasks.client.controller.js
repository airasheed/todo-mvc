
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
            console.log(taskId);
            tasks.markCompleted(taskId);
        };

        $scope.getAllCompleted = function() {

        };

        $scope.deleteTask = function(taskId) {
            console.log(taskId);
            //tasks.del(taskId);
        };

        $scope.addTask = function() {
            tasks.add(tasks);
        };

     /*   $http.get('/tasks')
            .then(function (response) {
                $scope.tasks = response.data;
            });*/
    });

