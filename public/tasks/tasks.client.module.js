
//Main module file
angular.module('tasks', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('task', {
                url: '/task',
                templateUrl: 'tasks/views/tasks.client.view.html',
                controller: 'taskCtrl'
            });

    }).controller('taskCtrl', function($scope, $http) {
        $scope.title = 'Test Title';

        console.log('taskCtrl is loaded');

        $http.get('/tasks')
            .then(function (response) {
                $scope.tasks = response.data;
            });
    });