const connection = require('../../config/connection');

const signupQuery = ({ username, password, email }) => connection.query('INSERT INTO users(username, password, email) VALUES($1, $2, $3) Returning *', [username, password, email]);

module.exports = signupQuery;
