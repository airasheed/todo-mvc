
//Main module file
angular.module('tasks', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('tasks', {
                url: '/tasks',
                templateUrl: 'tasks/views/tasks.client.view.html',
                controller: 'taskCtrl'
            });

    });