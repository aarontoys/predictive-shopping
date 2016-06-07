var knex = require('./knex');
var sched = require('../utils/schedule');
var Users = function () {return knex('users');};

function getAllUsers () {
  return Users();
}

function getSingleUser (id) {
  return Users().where('id',id)
  .then(function(result) {
    result = sched.createOccurrences(result); 
    return result;
  });
}

function updateUser (id, fname, lname, email, schedule_type, schedule) {
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