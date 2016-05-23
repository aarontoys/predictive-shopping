var knex = require('./knex_groceries');
var Groceries = function () {return knex('groceries');};

function getAllGroceries () {
  return Groceries().limit(20);
}

module.exports = {
  getAllGroceries: getAllGroceries
}