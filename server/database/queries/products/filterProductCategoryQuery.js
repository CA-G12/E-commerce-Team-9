const connection = require('../../config/connection');

const FilterProductsByCategoryQuery = (category) => connection.query('SELECT * FROM products WHERE category = $1', [category]);

module.exports = FilterProductsByCategoryQuery;
