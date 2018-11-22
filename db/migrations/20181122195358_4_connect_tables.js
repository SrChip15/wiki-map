exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_favourites', function(table){
    table.integer('user_id');
    table.integer('map_id');
  })
  .then(function() {
    return knex.schema.table('user_favourites', function(table) {
      table.unique('user_id', 'map_id');
    });
  })
  .then(function() {
    return knex.schema.createTable('user_contributions', function(table) {
      table.integer('user_id');
      table.integer('map_id');
    })
  })
  .then(function() {
    return knex.schema.table('user_favourites', function(table) {
      table.foreign('user_id').references('id').inTable('users');
      table.foreign('map_id').references('id').inTable('maps');
    })
  })
  .then(function() {
    return knex.schema.table('user_contributions', function(table) {
      table.foreign('user_id').references('id').inTable('users');
      table.foreign('map_id').references('id').inTable('maps');
    })
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('user_contributions', function(table) {
    table.dropForeign('user_id');
    table.dropForeign('map_id');
  })
  .then(function() {
    return knex.schema.table('user_favourites', function(table) {
      table.dropForeign('user_id');
      table.dropForeign('map_id');
    })
  })
  .then(function() {
    return knex.schema.dropTable('user_contributions');
  })
  .then(function() {
    return knex.schema.dropTable('user_favourites');
  });
};
