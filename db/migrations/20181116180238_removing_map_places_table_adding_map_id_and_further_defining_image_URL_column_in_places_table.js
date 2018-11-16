
exports.up = function(knex, Promise) {
  return knex.schema.table('map_places', function(table) {
    table.dropForeign('place_id');
    table.dropForeign('map_id');
  })
  .then(function() {
    return knex.schema.dropTable('map_places');
  })
  .then(function() {
    return knex.schema.table('places', function(table) {
      table.integer('map_id');
      table.renameColumn('image', 'image_url');
      table.renameColumn('url', 'place_url');
      table.foreign('map_id').references('id').inTable('maps');
    });
  });
},

exports.down = function(knex, Promise) {
  return knex.schema.table('places', function(table) {
    table.dropForeign('map_id');
    table.dropColumn('map_id');
    table.renameColumn('image_url', 'image');
    table.renameColumn('place_url', 'url');
  })
  .then(function() {
  return knex.schema.createTable('map_places', function(table){
    table.integer('map_id');
    table.integer('place_id');
    table.foreign('map_id').references('id').inTable('maps');
    table.foreign('place_id').references('id').inTable('places');
   });
  })
};
