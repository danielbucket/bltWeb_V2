
exports.seed = (knex, Promise) =>{
  return knex('users').del()
    .then( () =>{
      return knex('users').insert([
        {id: 1, user_name: 'bucket1', user_email: 'bucket1@mail1.com', user_password: "password1"},
        {id: 2, user_name: 'bucket2', user_email: 'bucket2@mail2.com', user_password: "password2"},
        {id: 3, user_name: 'bucket3', user_email: 'bucket3@mail3.com', user_password: "password3"}
      ]);
    });
};
