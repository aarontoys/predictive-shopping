(function () {

  angular
  .module('myApp')
  .controller('userAdminCtrl', userAdminCtrl)

  // userAdminCtrl.$inject = []


  function userAdminCtrl () {
    var vm = this;

    console.log('line12',vm);
    vm.mon=true;
    vm.tue=true;
    vm.wed=true;
    vm.thu=true;
    vm.fri=true;
    vm.sat=true;
    vm.sun=true;
    // vm.days = [
    //   {
    //     text: 'Monday',
    //     value: 1  
    //   },
    //   {
    //     text: 'Tuesday',
    //     value: 2 
    //   },
    //   {
    //     text: 'Wednesday',
    //     value: 3 
    //   },
    //   {
    //     text: 'Thursday',
    //     value: 4  
    //   },
    //   {
    //     text: 'Friday',
    //     value: 5  
    //   },
    //   {
    //     text: 'Saturday',
    //     value: 6  
    //   },
    //   {
    //     text: 'Sunday',
    //     value: 7  
    //   },
    // ]
    function getUser () {
      
    }

    vm.submit = function () {
      console.log(vm);
    }
  }

})();