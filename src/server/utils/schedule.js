var later = require('later');

later.date.localTime();

var sched = {};
var listCount = 3;

function createOccurances (int, arr) {
  var occurances = []
  switch(int) {
    case 0:  
      int = 'd'    
      occurances = laterOccurances(createSchedule(int, arr));    
      break;
    case 1:      
      date = arr[0];    
      interval = arr[1];    
      occurances = daySchedule(date, interval);    
  }
  return occurances
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

module.exports = {
  createOccurances: createOccurances
}