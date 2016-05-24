(function () {

  angular
  .module('myApp')
  .controller('userAdminCtrl', userAdminCtrl)

  // userAdminCtrl.$inject = []

  function userAdminCtrl () {
    var vm = this;

    console.log(vm);

  }

})();