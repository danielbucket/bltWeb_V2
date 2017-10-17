const path = require('path')
const express = require('express')
const app = express();

const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const db = require('knex')(config);

const PORT = process.env.PORT || 3300;
app.set('port', PORT)


app.get("/tits", (req,res) => {
	console.log('world sourced')

	db('users')
	.select('*')
	.then(data => res.status(200).json({ data }))
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = app;