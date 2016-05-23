(function () {

  angular
  .module('myApp')
  .controller('listsCtrl', listsCtrl)

  listsCtrl.$inject = ['listsDataService']

  function listsCtrl (listsDataService) {
    var vm = this;
    vm.greeting = 'we are family.';

    console.log(getLists());

    function getLists () {
      listsDataService.getLists()
      .then(function (lists) {
        console.log('lists: ', lists);
        vm.lists = lists.data.data;
        console.log(vm.lists);
      })
      .catch(function (err) {
        return next(err);
      });
    };
  }

})();