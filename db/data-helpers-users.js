module.exports = function makeUserDataHelpers(knex) {
  return {
    // Create User, returns newly created user ID on success
    createUser: (email, password, callback) => {
      knex
        .select('*')
        .from('users')
        .where('email', email)
        .andWhere('password', password)
        .then((rows) => {
          //check if user exists - email based
          let userExists = false;
          for (const user of rows) {
            if (user.email === email) {
              callback(-1);
              userExists = true
            }
          }

          if (!userExists) {
            return knex('users')
              .insert({
                'email': email,
                'password': password,
              })
              .returning('id')
              .asCallback((err, id) => {
                if (err) {
                  callback(err);
                }
                callback(null, id);
              });
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

    //find user Id by email and password
    userIdByEmailPassword: (email, password, callback) => {
      const emailStr = email.toString();
      const passwordStr = password.toString();
      return knex.select('id')
        .from('users')
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
};
