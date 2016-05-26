(function () {
  
  angular
  .module('myApp')
  .service('listsDataService', listsDataService);

  listsDataService.$inject = ['$http'];

  function listsDataService ($http) {
    return {
      getLists: function (id) {
        return $http.get('/lists/'+id)
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
