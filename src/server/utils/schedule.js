var later = require('later');

later.date.localTime();

var sched = {};
var listCount = 3;
var lastListDate = '';

//hard coded list count (line55) - think this also impacts item count since using same fxns.
//also poping off last occurrence if more than 3 occurrences - also impacting item shcedule.

function createOccurrences (result) {
  console.log('createOcc line13', result)
    result.forEach(function(el) {
      var int = el.schedule_type;
      var arr = el.schedule;
      console.log('line17', int, typeof int)
      console.log('line18', int, typeof int)
      switch(int) {
        case 0:  
          int = 'd'    
          el.occurrences = laterOccurrences(createSchedule(int, arr));
          lastListDate = (el.occurrences[el.occurrences.length-1])
          console.log('line23',lastListDate);
          break;
        case 1: 
          date = arr[0];    
          interval = arr[1];

          console.log('line26', date, typeof date)
          console.log('line27', interval, typeof interval)
          el.occurrences = daySchedule(date, interval);
          if(el.hasOwnProperty('fname')) {
            lastListDate = (el.occurrences[el.occurrences.length-1])
          } 
      }
    })
    console.log('line33',result);
  return result;
}

function daySchedule (startDate, interval) {
  var arr = [];
  startDate = new Date(startDate);
  endDate = (new Date(lastListDate).getTime() - startDate.getTime())/later.DAY
  while(startDate  <= new Date(lastListDate)) {  
    if (startDate >= later.day.start(new Date())) {
      arr.push(later.day.end(startDate));
    }  
    startDate = new Date(startDate.getTime() + (parseInt(interval)*later.DAY));
  }
  // if (arr.length === 4) {
  //   arr.pop()
  // }
  return arr;
};

function createSchedule (type, schedule) {
  sched = {
    schedules: [{[type]: schedule}],
    exceptions: []
  }
  return sched;
};

function laterOccurrences (schedInst) {
  var d = new Date();
  var occurs = later.schedule(schedInst).next(5, d);
  return occurs.map(function(el) {
    return later.day.end(el);
  })
  // return occurs;
}

function addOccurrences (arr1, arr2) {
  return arr1.map(function (obj, index) {
    if ( arr2[index] ) {
      // obj.occurs = later.day.end(arr2[index]);
      obj.occurs = arr2[index];
    } 
  });
};

function compareToListDate (listDate) {
  return function (item, index) {
    // put your code for the forEach
  }
}

function addItems (listArr, occArr, itemArr) {
  console.log('line80',listArr);
  console.log('line81',occArr);
  console.log('line82',itemArr);

  // var itemArr = [{ occurrences: ["2016-01-01", "2016-02-01"] }, { occurrences: [] }]
  // itemArr.map((item) => {
  //   item.occurrences = item.occurrences.filter((date) => { ... });
  //   return item;
  // });
  return listArr.map(function(listObj, listIndex) {
    var itemListArr = occArr.map(function(date, occIndex, occArr){
      if(occIndex < occArr.length - 1) {
        var allItemsArr = [];
        var dates = []
        itemArr.forEach(function (obj, objIndex, itemObj) {
          // var itemFilter = obj.occurrences.forEach(compareToListDate(occArr[occIndex+1]))
          obj.status = 1;
          var itemFilter = obj.occurrences.forEach(function(el, index, occObj) {
            itemDate = new Date(el);
              if(itemDate >= new Date(date) && itemDate < new Date(occArr[occIndex+1])) {
                dates.push(itemDate);
                allItemsArr.push(obj)
              }
             
          })
          // return allItemsArr;
        })
      }
      return allItemsArr; 
    })

    listObj.items = itemListArr[listIndex]
    // listObj.dates = dates[listIndex]
  });

  // var test = occArr.map(function(occEl, occIndex, occArr) {
  //   if(occIndex <= occArr.length - 2) {
  //     var items = itemArr.map(function(item, itemIndex) {
  //       var filteredDates = item.occurrences.filter(function(itemOcc) {
  //         // var mutItemOcc  = itemOcc
  //         // mutItemOcc = later.day.end(mutItemOcc);
  //         // mmmm = later.day.end(itemOcc);
  //         return new Date(itemOcc) >= new Date(occEl) && new Date (itemOcc) < new Date (occArr[occIndex+1]);
  //       })

  //       item.occurrences = filteredDates;
  //       return item;
  //     })

  //   }
  // })
}

function combineItems(listArr) {
  // var combined = []
  debugger;
  listArr.forEach(function(listObj, listIndex) { 
    var combined = listObj.items.reduce(function(prev,curr,rIndex) {
      var count = 1;
      if (listIndex === 2) {
        count = 27;
      }
      if(!prev.length) {
        curr.count = count;
        prev.push(curr);
      }
      else if (prev[prev.length-1].id === curr.id) {
        prev[prev.length-1].count++;
      } else {
        curr.count = count;
        prev.push(curr)
      }
      return prev
    },[])
    // listArr[index].combined = combined;
    listObj.items = combined;
    // listArr[listIndex].items = combined;

    //   return [listObj.id, i.semantic_name, i.count];
    // }));
    if (listIndex === 0) {
    }


    // listObj.combined = combined;
  })

}

module.exports = {
  createOccurrences: createOccurrences,
  addOccurrences: addOccurrences,
  addItems: addItems,
  combineItems: combineItems
}