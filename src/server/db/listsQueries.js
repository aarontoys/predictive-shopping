var knex = require('./knex');
var sched = require('../utils/schedule');

var Lists = function () {return knex('lists');};
var listItems = function () {return knex('user_grocery_items');};

function getAllLists () {
  return Lists();
}

function getAllItemsByUser (id) {
  console.log('line12',id);
  return listItems().where('user_id',id)
  .then(function(results) {
    // console.log(results);
    results = sched.createOccurrences(results);
    return results;
  })
  .catch(function(err) {
    console.log(err);
    return err
  })
}

function addItem (id, semName, schedule_type, schedule) {
  return listItems()
  .insert({
    user_id: id,
    semantic_name: semName,
    schedule_type: schedule_type,
    schedule: JSON.stringify(schedule)
  })
}

function updateItemSchedule (id, schedule) {
  return listItems().where('id',id)
  .update({
    schedule: JSON.stringify(schedule)
  })
}

module.exports = {
  getAllLists: getAllLists,
  getAllItemsByUser: getAllItemsByUser,
  addItem: addItem,
  updateItemSchedule: updateItemSchedule
}