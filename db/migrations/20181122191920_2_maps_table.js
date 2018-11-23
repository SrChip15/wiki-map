exports.up = function (knex, Promise) {
  return knex.schema.createTable('maps', function (table) {
    table.increments();
    table.string('url');
    table.string('name');
    table.string('description');
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('maps');
};
