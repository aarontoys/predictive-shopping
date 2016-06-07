var later = require('later');

later.date.localTime();

var sched = {};
var listCount = 3;
var lastListDate = '';

//hard coded list count (line55) - think this also impacts item count since using same fxns.
//also poping off last occurrence if more than 3 occurrences - also impacting item shcedule.

function createOccurrences (result) {
  console.log('sched line13', result.length)
    result.forEach(function(el) {
      var int = el.schedule_type;
      var arr = el.schedule;
      switch(int) {
        case 0:  
          int = 'd'    
          el.occurrences = laterOccurrences(createSchedule(int, arr));
          lastListDate = (el.occurrences[el.occurrences.length-1])
          break;
        case 1: 
          date = arr[0];    
          interval = arr[1];    
          el.occurrences = daySchedule(date, interval);
          console.log('sched line27', el.occurrences);    
      }
    })
  console.log('sched line29')
  return result;
}

function daySchedule (startDate, interval) {
  console.log('sched line34')
  var arr = [];
  startDate = new Date(startDate);
  // console.log(startDate);
  // console.log('line36', lastListDate);
  endDate = (new Date(lastListDate).getTime() - startDate.getTime())/later.DAY
  // console.log('line37',endDate);
  while(startDate  <= new Date(lastListDate)) {  
    if (startDate >= later.day.start(new Date())) {
      arr.push(later.day.end(startDate));
    }  
    startDate = new Date(startDate.getTime() + (interval*later.DAY));
  }
  // if (arr.length === 4) {
  //   arr.pop()
  // }
  console.log('sched line50')
  return arr;
};

function createSchedule (type, schedule) {
  console.log('sched line55')
  sched = {
    schedules: [{[type]: schedule}],
    exceptions: []
  }
  return sched;
};

function laterOccurrences (schedInst) {
  console.log('sched line64')
  var d = new Date();
  var occurs = later.schedule(schedInst).next(5, d);
  // console.log('line56',occurs)
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
  // console.log('listArr', listArr)
  // console.log('occArr', occArr)
  // console.log('itemArr', itemArr)

  // var itemArr = [{ occurrences: ["2016-01-01", "2016-02-01"] }, { occurrences: [] }]
  // itemArr.map((item) => {
  //   item.occurrences = item.occurrences.filter((date) => { ... });
  //   return item;
  // });
  // console.log('line88', itemArr);
  return listArr.map(function(listObj, listIndex) {
    // console.log('lilne86',occArr);
    var itemListArr = occArr.map(function(date, occIndex, occArr){
      if(occIndex < occArr.length - 1) {
        var allItemsArr = [];
        var dates = []
        itemArr.forEach(function (obj, objIndex, itemObj) {
          // var itemFilter = obj.occurrences.forEach(compareToListDate(occArr[occIndex+1]))
          var itemFilter = obj.occurrences.forEach(function(el, index, occObj) {
            // console.log('line92',index, el, itemObj);
            itemDate = new Date(el);
              if(itemDate >= new Date(date) && itemDate < new Date(occArr[occIndex+1])) {
                dates.push(itemDate);
                allItemsArr.push(obj)
              }
             
          })
          // console.log('line94',itemFilter);
          // return allItemsArr;
        })
      }
                // console.log(dates);
      // console.log('line105',allItemsArr);
      return allItemsArr; 
    })
      // console.log('line106',itemListArr)

    listObj.items = itemListArr[listIndex]
    // listObj.dates = dates[listIndex]
    // console.log('line109',listObj);
  });

  // var test = occArr.map(function(occEl, occIndex, occArr) {
  //   // console.log(occEl);
  //   // console.log(occIndex, occArr.length);
  //   if(occIndex <= occArr.length - 2) {
  //     // console.log('stop: reached second to last index:' + occIndex + ', ' + occArr.length);
  //     var items = itemArr.map(function(item, itemIndex) {
  //       var filteredDates = item.occurrences.filter(function(itemOcc) {
  //         // console.log('line81',typeof itemOcc);
  //         // console.log('line82',typeof occEl);
  //         // var mutItemOcc  = itemOcc
  //         // mutItemOcc = later.day.end(mutItemOcc);
  //         // mmmm = later.day.end(itemOcc);
  //         // console.log(mutItemOcc);
  //         return new Date(itemOcc) >= new Date(occEl) && new Date (itemOcc) < new Date (occArr[occIndex+1]);
  //       })

  //       item.occurrences = filteredDates;
  //       return item;
  //     })

  //     // console.log('itemArr', items);
  //   }
  // })
}

function combineItems(listArr) {
  // console.log('line142',listArr)
  // var combined = []
  debugger;
  listArr.forEach(function(listObj, listIndex) { 
    // console.log(listObj.items.length); 
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
    // console.log('line158',index,combined);
    // console.log('line160',listObj);
    // listArr[index].combined = combined;
    listObj.items = combined;
    // listArr[listIndex].items = combined;

    // console.log(listArr[listIndex].items.map((i) => {
    //   return [listObj.id, i.semantic_name, i.count];
    // }));
    if (listIndex === 0) {
      console.log('line163',combined);
    }


    // listObj.combined = combined;
  })
  console.log('line168',listArr[0])

}

module.exports = {
  createOccurrences: createOccurrences,
  addOccurrences: addOccurrences,
  addItems: addItems,
  combineItems: combineItems
}