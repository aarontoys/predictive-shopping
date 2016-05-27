var later = require('later');

later.date.localTime();

var sched = {};
var listCount = 3;

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
  if (arr.lenght === 4) {
    arr.pop()
  }
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
  var occurs = later.schedule(schedInst).next(3, d);
  return occurs;
}

function addOccurances (arr1, arr2) {
  return arr1.map(function (obj, index) {
    if ( arr2[index] ) {
      obj.occurs = later.day.end(arr2[index]);
    } 
  });
};

module.exports = {
  createOccurances: createOccurances,
  addOccurances: addOccurances
}