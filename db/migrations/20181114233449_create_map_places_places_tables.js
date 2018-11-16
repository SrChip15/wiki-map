
exports.up = function(knex, Promise) {
  return knex.schema.createTable('map_places', function(table){
    table.integer('map_id');
    table.integer('place_id');
  })
  .then(function() {
    return knex.schema.createTable('places', function(table) {
      table.increments();
      table.string('name');
      table.string('image');
      table.string('description');
      table.decimal('place_lat', 8, 4);
      table.decimal('place_long', 8, 4);
    })
  })
  .then(function() {
    return knex.schema.table('map_places', function(table) {
      table.foreign('map_id').references('id').inTable('maps');
      table.foreign('place_id').references('id').inTable('places')
    })
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('map_places', function(table) {
    table.dropForeign('place_id');
    table.dropForeign('map_id');
  })
  .then(function() {
    return knex.schema.dropTable('places');
  })
  .then(function() {
    return knex.schema.dropTable('map_places');
  });
};
