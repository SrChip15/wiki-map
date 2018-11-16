const args = process.argv.slice(2);
// const settings = require("../.env"); // settings.json
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

module.exports = function makeDataHelpers(db) {
  return {

// Create User
  createUser: (email, password, callback) => {
    return knex('users').insert({'email': email, 'password': password})
    .asCallback((err, res) => {
      if (err) {
        callback(err);
        process.exit(0);
      } else {
        callback(null, res);
        process.exit(0);
      }
    });
  },

// Find user
  userEmailPasswordById: (userid, callback) => {
    const useridInt = parseInt(userid);
    return knex.select('email', 'password').from('users')
    .where('id', useridInt)
    .asCallback(function(err, rows) {
    if (err) {
        callback(err);
        process.exit(0);
      } else {
        callback(null, res);
        process.exit(0);
      }
    });
  },

  // userEmailPasswordById(args, (person) => {
  //   console.log('this is', person);
  // });

    //         by email and password
  // const useridByEmailPassword = (email, password, callback) => {
  //   const emailStr = email.toString();
  //   console.log(password)
  //   const passwordStr = password.toString();
  //   return knex.select('id').from('users')
  //   .where('email', emailStr).andWhere('password', passwordStr).from('users')
  //   .asCallback(function(err, rows) {
  //     if (err) callback(err);
  //     callback(rows);
  //     process.exit(0);
  //   });
  // }

  // useridByEmailPassword(args[0], args[1], (test) => {
  //   console.log(test);
  // });




// };
