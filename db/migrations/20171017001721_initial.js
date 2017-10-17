
exports.up = (knex, Promise) => {
  return Promise.all([
  	knex.schema.createTable('users', table => {
  		table.increments('id').primary()
  		table.string('user_email')
  		table.string('user_name')
  		table.string('user_password')

  		table.timestamps(true, true)	
	 	})
 	])
};

exports.down = (knex, Promise) => {
  return Promise.all([
  	knex.schema.dropTable('users')
 	])
};
