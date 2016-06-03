(function () {

  angular
  .module('myApp')
  .directive('addItem', addItem)

  function addItem () {
    return {
      restrict: 'EA',
      templateUrl: 'app/add_item/ai.view.html',
      controller: 'addItemCtrl',
      controllerAs: 'vm'
    }
  }
})();