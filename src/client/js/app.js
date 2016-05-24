// sample angular code

var app = angular.module('myApp', ['ngRoute']);

app.controller('myController', ['$scope', function($scope) {
  $scope.greeting = "Hello World!";
}]);

// (function () {
//   angular.module('myApp', []);
// })();