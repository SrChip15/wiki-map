const args = process.argv.slice(2);
const settings = require("../.env"); // settings.json
const knex = require("knex")({
  client: 'postgresql',
  connection: {
    host     : 'localhost',
    user     : 'labber',
    password : 'labber',
    database : 'midterm',
    port     : 5432,
  }
});




// module.exports = function makeDataHelpers(db) {
//   return {



    // Create place
    // Modify place
    // Delete place
    // Find place
    //          by map_id
    //          by place_id
    //          by category


// };
