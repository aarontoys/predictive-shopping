(function () {

  angular
  .module('myApp')
  .controller('userAdminCtrl', userAdminCtrl)

  userAdminCtrl.$inject = ['uaService'];


  function userAdminCtrl (uaService) {
    var vm = this,
        dayKeys = { 
          "mon": 1, 
          tue: 2,
          wed: 3,
          thu: 4,
          fri: 5,
          sat: 6,
          sun: 7
        }

//comment

    getSingleUser(3);

    function getSingleUser (id) {
      uaService.getSingleUser(id)
      .then(function (result) {
        console.log('result: ', result)
        vm.fname = result.data.user[0].fname
        vm.lname = result.data.user[0].lname
        vm.email = result.data.user[0].email
      })
    }

    function updateSingleUser () {

    }


    console.log('line12',vm);
  
    function getUser () {

    }

    vm.submit = function () {
      console.log(vm);
      console.log(Object.keys(vm.shopDays));
      console.log(buildSchedule(vm.shopDays));
    }


    function buildSchedule (daysObj) {
      return Object.keys(daysObj).map(function(el) {
        return dayKeys[el]
      })
    }



    
  }

})();