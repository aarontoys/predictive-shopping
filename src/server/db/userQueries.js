var knex = require('./knex');
var Users = function () {return knex('users');};

function getAllUsers () {
  return Users();
}

function getSingleUser (id) {
  return Users().where('id',id);
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