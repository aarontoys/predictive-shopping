(function () {

  angular
  .module('myApp')
  .directive('shoppingLists', shoppingLists)

  function shoppingLists () {
    return {
      restrict: 'EA',
      templateUrl: 'app/lists/lists.view.html',
      controller: 'listsCtrl',
      controllerAs: 'vm'
    }
  }
  

})();