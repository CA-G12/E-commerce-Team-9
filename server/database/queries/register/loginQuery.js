const connection = require('../../config/connection');

const loginQuery = (email) => connection.query('SELECT id, password as hashedPassword, username, email FROM users WHERE email= $1 ', [email]);

module.exports = loginQuery;
