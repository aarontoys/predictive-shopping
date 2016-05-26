var knex = require('./knex');
var sched = require('../utils/schedule');
var Users = function () {return knex('users');};

function getAllUsers () {
  return Users();
}

function getSingleUser (id) {
  return Users().where('id',id)
  .then(function(result) {
    var schedule = sched.createSchedule(result[0].schedule_type, result[0].schedule);
    var occurances = sched.createOccurances(schedule);
    result[0].occurances = occurances;
    return result;
  });
}

function updateUser (id, fname, lname, email, schedule_type, schedule) {
  console.log('line 13')
  return Users().where('id',id)
  .update({
    fname: fname,
    lname: lname,
    email: email,
    schedule_type: schedule_type,
    schedule: JSON.stringify(schedule)
  });
}

module.exports = {
  getAllUsers: getAllUsers,
  getSingleUser: getSingleUser,
  updateUser: updateUser
}