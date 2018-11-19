module.exports = function makeUserDataHelpers(knex) {
  return {

    // Create User, returns newly created user ID on success
    createUser: (email, password, name, callback) => {
      return knex('users')
        .insert({
          'email': email,
          'password': password
          'name': name
        })
        .returning('id')
        .asCallback((err, res) => {
          if (err) {
            callback(err);
          } else {
            callback(null, res);
          }
        });
    },

    // Find user by email and password
    userEmailPasswordById: (userid) => {
      const useridInt = parseInt(userid);
      return knex.select("email", "password", "name")
        .from("users")
        .where("id", useridInt)
        .asCallback((err, res) => {
          if (err) {
            callback(err);
          } else {
            callback(null, res);
          }
        });
    },

    //user Id by email and password
    userIdByEmailPassword: (email, password, callback) => {
      const emailStr = email.toString();
      const passwordStr = password.toString();
      return knex.select('id').from('users')
        .where('email', emailStr)
        .andWhere('password', passwordStr)
        .from('users')
        .asCallback((err, res) => {
          if (err) {
            callback(err);
          } else {
            callback(null, res);
          }
        });
    },

    userIdByNamePassword: (name, password, callback) => {
      const nameStr = name.toString();
      const passwordStr = password.toString();
      return knex.select('id').from('users')
        .where('name', emailStr)
        .andWhere('password', passwordStr)
        .from('users')
        .asCallback((err, res) => {
          if (err) {
            callback(err);
          } else {
            callback(null, res);
          }
        });
    }
  };
}
