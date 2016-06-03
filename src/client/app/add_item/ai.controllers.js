(function () {

  angular
  .module('myApp')
  .controller('addItemCtrl', addItemCtrl)

  addItemCtrl.$inject = ['addItemDataService', 'uaService']

  function addItemCtrl (addItemDataService, uaService) {
    var vm = this;

    vm.show = false;

    vm.barcode = '049000000443';

    vm.userId = 1

    console.log('line16',vm.selectedList)

    vm.lookupBarcode = function () {
      console.log(vm.barcode);
      addItemDataService.lookupBarcode(vm.barcode)
      .then(function(newItem) {
        console.log(newItem);
        vm.title = newItem.data.product.title
        vm.imageUrl = newItem.data.product.imageUrl
        vm.brand = newItem.data.product.brandName
        vm.show = true;
      })
      uaService.getSingleUser(vm.userId)
      .then(function(user) {
        console.log(user)
        vm.current = user.data.user[0].occurrences[0]
        vm.next = user.data.user[0].occurrences[1]
        vm.following = user.data.user[0].occurrences[2]
        vm.hold = user.data.user[0].occurrences[3]
      })
    }

    vm.addItem = function () {
      console.log(vm);

      addItemDataService.addItem(vm.userId,vm.semName,vm.selList,vm.freq)
    }
  }

  // vm.addItem.freq.


})();
