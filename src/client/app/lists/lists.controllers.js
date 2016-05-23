(function () {

  angular
  .module('myApp')
  .controller('listsCtrl', listsCtrl)

  function listsCtrl () {
    var vm = this;
    vm.greeting = 'we are family.';
  }

})();