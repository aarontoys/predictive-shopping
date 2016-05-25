(function () {

  angular
  .module('myApp')
  .service('uaService', uaService);

  uaService.$inject = ['$http'];

  function uaService ($http) {
    return {
      getSingleUser: function (id) {
        return $http.get('/users/'+id)
        .then(function (res) {
          return res
        })
        .catch(function (err) {
          return err
        });
      }
    }
  }


})();