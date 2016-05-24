var knex = require('./knex');
var Lists = function () {return knex('lists');};
var listItems = function () {return knex('user_grocery_items');};

function getAllLists () {
  return Lists();
}

function getAllItemsByUser () {
  return listItems().where('user_id',1);
}

module.exports = {
  getAllLists: getAllLists,
  getAllItemsByUser: getAllItemsByUser
}