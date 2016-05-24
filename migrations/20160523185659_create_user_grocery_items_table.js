
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_grocery_items', function (table) {
    table.increments();
    table.integer('user_id').references('users.id');
    table.integer('grocery_id');
    table.integer('repeat_interval');
    table.string('repeat_freq');
    table.string('semantic_name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_grocery_items');
};
