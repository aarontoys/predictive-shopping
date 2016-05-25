var knex = require('./knex');
var Users = function () {return knex('users');};

function getAllUsers () {
  return Users();
}

function getSingleUser (id) {
  return Users().where('id',id);
}

module.exports = {
  getAllUsers: getAllUsers,
  getSingleUser: getSingleUser
}