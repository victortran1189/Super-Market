var app = angular.module("superMarket", ["ngRoute"]);


config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/main", {
    templateUrl: "partials/superMarket.html",
    controller: "mainController"
  }).
	when("/checkout", {
    templateUrl: "partials/checkOut.html",
    controller: "mainController"
  }).
	otherwise({redirectTo: '/'});
}]);
