exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('email');
    table.text('password');
  }).then(function() {
    return knex.schema.table('users', function(table) {
      table.unique('email');
    });
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
