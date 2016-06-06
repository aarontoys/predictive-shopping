(function () {

  angular
  .module('myApp')
  .controller('listsCtrl', listsCtrl)

  listsCtrl.$inject = ['listsDataService']

  function listsCtrl (listsDataService) {
    var vm = this
    
    vm.userId =1;
    console.log(vm.userId);
    console.log('in my main project!!!')

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
        consolidate(vm.lists)
      })
      .catch(function (err) {
        return next(err);
      });
    };

    function consolidate (listArr) {
      return listArr.map(function(eachList) {
        var result = eachList.items.reduce(function(prev,curr,index) {
          if (prev.length && prev[prev.length-1].id === curr.id) {
            prev[prev.length-1].count++;
          } else {
            curr.count = 1;
            prev.push(curr)
          }
          return prev;
        }, [])
        eachList.items = result
        return eachList;
      });
    }
  }

})();