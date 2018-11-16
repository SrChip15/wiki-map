const args = process.argv.slice(2);
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


    // var findPlaceByMapId = ((category, callback) => {
    //   // var t = category.toString()
    //   var testRows = [];
    //   return knex('places')
    //   .where({category: category})
    //   .then (rows => {
    //     callback(rows);
    //   })
    // })

    // findPlaceByMapId(args[0], (mapRows) => {
    //   console.log('rows', mapRows);
    // })

// module.exports = function makeDataHelpers(db) {
//   return {

// Create map
  // const createMap = ((name, description, userid, callback) => {
  //   const nameStr = name.toString();
  //   const descriptionStr = description.toString();
  //   const useridInt = parseInt(userid);
  //   return knex('maps').insert({url: 'testmae' , name: nameStr , description: descriptionStr})
  //   .returning('id')
  //     .then((id) => {
  //       return knex('user_contributions').insert({user_id: userid, map_id: id[0]})
  //        .asCallback((err, rows) => {
  //         if (err) callback(err);
  //         callback(true);
  //         process.exit(0)
  //        });
  //     });
  // })

  // createMap(args[0], args[1], args[2], (rawr) => {
  //   console.log('rawr', rawr);
  // });

// Delete map
//   const deleteMap = ((mapid) => {
//     const mapidInt = parseInt(mapid);
//     return Promise.all([
//       knex('user_contributions').where('map_id', mapidInt).del();
//       knex('user_favourites').where('map_id', mapInt).del();
//       knex('map_places').where('map_id', mapInt).del()
//     ])
//     .then(() => {
//       fdajhfhacfhakfhashncflka
//       })
  // })
    // Find map
    //         by URL

  // const findMapByUrl = ((url, callback) => {
  //   const urlStr = url.toString();
  //   return knex.select('id').from('maps')
  //   .where('url', urlStr)
  //   .asCallback((err, map) => {
  //     if (err) callback(err);
  //     callback(map);
  //     process.exit(0);
  //   })
  // })

  // findMapByUrl(args, (mapid) => {
  //   console.log(mapid);
  // })


    //         by user favourites

  // const findMapByFavourites = (userid, callback) => {
  //   const useridInt = parseInt(userid);
  //   return knex.select('map_id').from('user_favourites')
  //   .where('user_id', useridInt)
  //   .asCallback((err, map) => {
  //     if (err) callback(err);
  //     callback(map);
  //     process.exit(0);
  //   })
  // }

  // findMapByFavourites(args, (mapid) => {
  //   console.log(mapid);
  // })

    //         by user contributions
  // const findMapByContribution = (userid, callback) => {
  //   const useridInt = parseInt(userid);
  //   return knex.select('map_id').from('user_contributions')
  //   .where('user_id', useridInt)
  //   .asCallback((err, map) => {
  //     if (err) callback(err);
  //     callback(map);
  //     process.exit(0);
  //   })
  // }

  // findMapByContribution(args, (mapid) => {
  //   console.log(mapid);
  // })


// const generateRandomString = () => {
//   let r = Math.random().toString(36).substring(9);
//   return r;
// }

// const randomStringChecker = (random) => {
//   const randomStr = string.toString();
//   if (randomStr === knex('maps').select('url')
// }









// };
