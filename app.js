var app = angular.module('spargosWeb', ['ngRoute', 'ngAnimate']);
app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'mainController'
    })
});
app.controller('mainController', function($scope) {
    
});