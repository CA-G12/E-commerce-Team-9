const connection = require('../../config/connection');

const filterPriceDescQuery = () => connection.query('SELECT * FROM products ORDER BY price DESC');

const filterPriceAscQuery = () => connection.query('SELECT * FROM products ORDER BY price ASC');

module.exports = { filterPriceDescQuery, filterPriceAscQuery };
