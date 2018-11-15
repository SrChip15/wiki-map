/**
 * We can config the knex-to-postgres DB connection here
 * and inject it in the server file
 */
const settings = require("../.env"); // settings.json
const knex = require("knex")({

  client: 'postgresql',
  connection: {
    host: 'localhost',
    user: 'labber',
    password: 'labber',
    database: 'midterm',
    port: 5432,
  }

});

module.exports = {
  getDB: knex,
}
