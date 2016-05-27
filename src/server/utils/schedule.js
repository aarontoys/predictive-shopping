var later = require('later');

later.date.localTime();

var sched = {};
var listCount = 3;

//hard coded list count (line55) - think this also impacts item count since using same fxns.
//also poping off last occurance if more than 3 occrurances - also impacting item shcedule.

function createOccurances (result) {

    result.forEach(function(el) {
      var int = el.schedule_type;
      var arr = el.schedule;
      switch(int) {
        case 0:  
          int = 'd'    
          el.occurances = laterOccurances(createSchedule(int, arr));    
          break;
        case 1: 
          date = arr[0];    
          interval = arr[1];    
          el.occurances = daySchedule(date, interval);    
      }
    })
  return result;
}

function daySchedule (startDate, interval) {
  var arr = [];
  startDate = new Date(startDate);
  while(startDate  <= (new Date().getTime()+(interval*later.DAY*listCount))) {  
    if (startDate >= later.day.start(new Date())) {
      arr.push(startDate);
    }  
    startDate = new Date(startDate.getTime() + (interval*later.DAY));
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

function laterOccurances (schedInst) {
  var d = new Date();
  var occurs = later.schedule(schedInst).next(5, d);
  // console.log('line56',occurs)
  return occurs;
}

function addOccurances (arr1, arr2) {
  return arr1.map(function (obj, index) {
    if ( arr2[index] ) {
      obj.occurs = later.day.end(arr2[index]);
    } 
  });
};

function addItems (listArr, occArr, itemArr) {
  // console.log('listArr', listArr)
  // console.log('occArr', occArr)
  // console.log('itemArr', itemArr)

  // var itemArr = [{ occurrences: ["2016-01-01", "2016-02-01"] }, { occurrences: [] }]
  // itemArr.map((item) => {
  //   item.occurrences = item.occurrences.filter((date) => { ... });
  //   return item;
  // });

  var test = occArr.map(function(occEl, occIndex, occArr) {
    // console.log(occEl);
    // console.log(occIndex, occArr.length);
    if(occIndex <= occArr.length - 2) {
      // console.log('stop: reached second to last index:' + occIndex + ', ' + occArr.length);
      var items = itemArr.map(function(item, itemIndex) {
        var filteredDates = item.occurances.filter(function(itemOcc) {
          // console.log('line81',typeof itemOcc);
          // console.log('line82',typeof occEl);
          // var mutItemOcc  = itemOcc
          // mutItemOcc = later.day.end(mutItemOcc);
          // mmmm = later.day.end(itemOcc);
          // console.log(mutItemOcc);
          return new Date(itemOcc) >= new Date(occEl) && new Date (itemOcc) < new Date (occArr[occIndex+1]);
        })
        
        item.occurances = filteredDates;
        return item;
      })

      console.log('itemArr', items);
    }
  })
}

module.exports = {
  createOccurances: createOccurances,
  addOccurances: addOccurances,
  addItems: addItems
}