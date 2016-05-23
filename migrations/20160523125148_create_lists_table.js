
exports.up = function(knex, Promise) {
  return knex.schema.createTable('lists', function(table) {
    table.increments();
    table.string('name');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('lists');
};
