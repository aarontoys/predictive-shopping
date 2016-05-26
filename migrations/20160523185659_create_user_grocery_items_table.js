
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_grocery_items', function (table) {
    table.increments();
    table.integer('user_id').references('users.id');
    table.integer('grocery_id');
    table.integer('schedule_type');
    table.json('schedule');
    table.string('semantic_name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_grocery_items');
};
