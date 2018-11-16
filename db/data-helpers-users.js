
const args = process.argv.slice(2);
const bcrypt = req

const knex = require("knex")({
  client: "postgresql",
  connection: {
    host: "localhost",
    user: "labber",
    password: "labber",
    database: "midterm",
    port: 5432
  }
});

module.exports = function makeUserDataHelpers(db) {
  return {

// Create User
    createUser: (email, password, callback) => {
      return knex('users')
        .insert({'email': email, 'password': password})
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

// Find user by email and password
    userEmailPasswordById: (userid) => {
      const useridInt = parseInt(userid);
      return knex.select("email", "password").from("users")
        .where("id", useridInt)
        .asCallback(function(err, res) {
          if (err) {
            callback(err);
            process.exit(0);
          } else {
            callback(null, res);
            process.exit(0);
          }
        });
    },


//user Id by email and password
    userIdByEmailPassword: (email, password, callback) => {
      const emailStr = email.toString();
      const passwordStr = password.toString();
      return knex.select('id').from('users')
        .where('email', emailStr).andWhere('password', passwordStr).from('users')
        .asCallback(function(err, res) {
          if (err) {
            callback(err);
            process.exit(0);
          } else {
            callback(null, res);
            process.exit(0);
          }
        });
    }
};
