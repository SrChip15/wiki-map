exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({id: 1, email: 'alice@gmail.com'}),
        knex('users').insert({id: 2, email: 'bob@hotmail.com'}),
        knex('users').insert({id: 3, email: 'charlie@lighthouselabs.ca'})
      ]);
    });
};
