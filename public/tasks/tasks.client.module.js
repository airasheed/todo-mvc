
//Main module file
angular.module('tasks', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('task', {
                url: '/task',
                templateUrl: 'tasks/views/tasks.client.view.html',
                controller: 'taskCtrl'
            });

    });