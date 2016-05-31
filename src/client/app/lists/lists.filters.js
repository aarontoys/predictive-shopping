(function () {

  angular
  .module('myApp')
  .filter('dateFilter', dateFilter)

  function dateFilter () {
    return function(item, listDate) {
      console.log('item', item);
      console.log('listDate',new Date(listDate));
      // console.log('itemDateArr', itemDateArr);
      // angular.forEach(item, function(obj) {
      //   console.log('forEach', obj.id, obj.occurances)

      // })
      item.forEach(function(obj) {
        console.log('js for each', obj.id, obj.occurances)
        obj.occurances.forEach(function(date) {
          console.log('date', date, listDate);
        })
      })
    }

  }

})();