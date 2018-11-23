exports.up = function (knex, Promise) {
  return knex.schema.createTable('places', function (table) {
    table.increments();
    table.integer('map_id');
    table.string('name');
    table.string('image_url');
    table.string('description');
    table.decimal('place_lat', 8, 4);
    table.decimal('place_long', 8, 4);
    table.string('category');
    table.string('place_url');
    table.foreign('map_id').references('id').inTable('maps');
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('places');
};
