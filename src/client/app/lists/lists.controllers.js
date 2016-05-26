(function () {

  angular
  .module('myApp')
  .controller('listsCtrl', listsCtrl)

  listsCtrl.$inject = ['listsDataService']

  function listsCtrl (listsDataService) {
    var vm = this,
        userId = 1;

    getLists(userId);

    function getLists (id) {
      listsDataService.getLists(id)
      .then(function (lists) {
        vm.lists = lists.data.lists;
        vm.items = lists.data.items;
      })
      .catch(function (err) {
        return next(err);
      });
    };
  }

})();