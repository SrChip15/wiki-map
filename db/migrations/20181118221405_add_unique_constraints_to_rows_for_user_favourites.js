
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('user_favourites', function(table) {
    table.unique('user_id', 'map_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('user_favourites', function(table) {
    table.dropUnique('user_id', 'map_id');
  });
};
