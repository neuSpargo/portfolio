var app = angular.module('spargosWeb', ['ng-route', 'ngAnimate']);
app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'mainController'
    })
});
app.controller('mainController', function($scope) {
    
});