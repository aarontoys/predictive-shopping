(function () {
  
  angular
  .module('myApp')
  .service('listsDataService', listsDataService);

  listsDataService.$inject = ['$http'];

  function listsDataService ($http) {
    return {
      getLists: function () {
        return $http.get('/lists')
        .then(function(res) {
          return res;
        })
        .catch(function (err) {
          return err
        });
      }
    }
  }

})();
