var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

  //routes
    $routeProvider
        .when ('/home', {
          templateUrl: '/views/main-view.html',
          controller: 'MainController',
          controllerAs: 'mc'
        })
        .when ('/view-1', {
            templateUrl: '/views/view_1.html',
            controller: 'OneController',
            controllerAs: 'one'
        })
        .when ('/view-2', {
            templateUrl: '/views/view_2.html',
            controller: 'TwoController',
            controllerAs: 'two'
        })
        .otherwise ( {
            redirectTo: '/home'
        });
}]);
