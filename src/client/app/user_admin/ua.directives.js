(function () {

  angular
  .module('myApp')
  .directive('userAdmin', userAdmin);

  function userAdmin () {
    return {
      restrict: 'EA',
      templateUrl: 'app/user_admin/ua.view.html',
      controller: 'userAdminCtrl',
      controllerAs: 'vm'
    }
  }

})();