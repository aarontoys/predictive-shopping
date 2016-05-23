var knex = require('./knex');
var Lists = function () {return knex('lists');};

function getAllLists () {
  return Lists();
}

module.exports = {
  getAllLists: getAllLists
}