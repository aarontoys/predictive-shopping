(function () {

angular
  .module('myApp')
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider']

function config ($routeProvider, $locationProvider) {
  console.log('hi');
  $routeProvider
    .when('/', {
      template: '<div shopping-lists></div>'
    })
    .when('/account', {
      template: '<div user-admin></div>'
      // controller: MyGeneralController
    });

  // $locationProvider.html5Mode(true);
}


})();