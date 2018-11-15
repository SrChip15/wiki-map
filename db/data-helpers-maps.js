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

    // Create map
  // const createMap = (name, description, userid) => {
  //   const nameStr = name.toString();
  //   const descriptionStr = description.toString();
  //   const useridInt = parseInt(userid);
  //   return knex('maps').insert({url: , name: nameStr , description: descriptionStr})
  //   .returning('id')
  //   .into('user_contributions')
  //     .then((ids) => {
  //       return knex('user_contributions').insert({user_id: userid, map_id: ids.id})
  //     })
  // }

  // createMap(args[0], args[1], args[2]);

    // Delete map
  const deleteMap = (mapid) => {
    const mapidInt = parseInt(mapid);
    return Promise.all([
      knex('user_contributions').where('map_id', mapidInt).del();
      knex('user_favourites').where('map_id', mapInt).del();
      knex('map_places').where('map_id', mapInt).del()
    ])
    .then(() => {
      fdajhfhacfhakfhashncflka
      })
  }
    // Find map
    //         by URL
    //         by user favourites
    //         by user contributions


    // Create place
    // Modify place
    // Delete place
    // Find place
    //          by map_id
    //          by place_id
    //          by category


const generateRandomString = () => {
  let r = Math.random().toString(36).substring(7);
  return r;
}

const randomStringChecker = (random) => {
  const randomStr = string.toString();
  if (randomStr === knex('maps').select('url')
}









// };
