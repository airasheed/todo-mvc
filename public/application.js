var todoApp = angular.module('mainModule', ['tasks','ui.router']);

todoApp.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/tasks');

});