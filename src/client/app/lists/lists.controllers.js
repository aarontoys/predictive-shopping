(function () {

  angular
  .module('myApp')
  .controller('listsCtrl', listsCtrl)

  listsCtrl.$inject = ['listsDataService']

  function listsCtrl (listsDataService) {
    var vm = this
    
    vm.userId =1;
    console.log(vm.userId);

    getLists(vm.userId);

    vm.getLists = function (id) {
      getLists(id);
    }

    // vm.getLists = function (id) {
      function getLists (id) {

      listsDataService.getLists(id)
      .then(function (lists) {
        vm.lists = lists.data.lists;
        vm.items = lists.data.items;
        console.log(vm.lists);
      })
      .catch(function (err) {
        return next(err);
      });
    };
  }

})();