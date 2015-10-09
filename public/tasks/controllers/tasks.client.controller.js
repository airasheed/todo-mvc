
angular.module('tasks')
.controller('taskCtrl', function($scope, $http) {
        $scope.title = 'Test Title';

        console.log('taskCtrl is loaded');

        $http.get('/tasks')
            .then(function (response) {
                $scope.tasks = response.data;
            });
    });

