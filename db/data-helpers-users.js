const args = process.argv.slice(2);
const settings = require("../.env"); // settings.json
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

module.exports = function makeDataHelpers(db) {
  return {
// Create User
    createUser: function (email, password) {
      return knex('users')
      .insert({ email: email, password: bcrypt.hashSync(password, 10)})
      .into('users')
},
//DataHelpers.loginUser;
//

// Find user
const userEmailPasswordById = userid => {
  const useridInt = parseInt(userid);
  return knex
    .select("email", "password")
    .from("users")
    .where("id", useridInt)
    .asCallback(function(err, rows) {
      if (err) return console.error(err);
      printResult(rows);
      process.exit(0);
    });
},
// userEmailPasswordById(args);

//         by email and password
const useridByEmailPassword = (email, password) => {
  const emailStr = email.toString();
  console.log(password);
  const passwordStr = password.toString();
  console.log(emailStr, passwordStr);
  return knex
    .select("id")
    .from("users")
    .where("email", emailStr)
    .andWhere("password", passwordStr)
    .from("users")
    .asCallback(function(err, rows) {
      if (err) return console.error(err);
      printResult(rows);
      process.exit(0);
    });
};

// useridByEmailPassword(args[0], args[1]);

const printResult = enter => {
  enter.forEach(element => {
    console.log(element);
  });
};

// };
