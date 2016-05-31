var knex = require('./knex');
var sched = require('../utils/schedule');

var Lists = function () {return knex('lists');};
var listItems = function () {return knex('user_grocery_items');};

function getAllLists () {
  return Lists();
}

function getAllItemsByUser (id) {
  return listItems().where('user_id',id)
  .then(function(results) {
    // console.log(results);
    results = sched.createOccurrences(results);
    return results;
  })
}

module.exports = {
  getAllLists: getAllLists,
  getAllItemsByUser: getAllItemsByUser
}