var later = require('later');

later.date.localTime();

var sched = {};

function createSchedule (type, schedule) {
  sched = {
    schedules: [{[type]: JSON.parse(schedule)}],
    exceptions: []
  }
  return sched;
};

function createOccurances (schedInst) {
  var d = new Date();
  var occurs = later.schedule(schedInst).next(3, d);
  return occurs;
}

module.exports = {
  createSchedule: createSchedule,
  createOccurances: createOccurances
}