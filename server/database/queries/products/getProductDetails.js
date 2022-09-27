const connection = require('../../config/connection');

const getProductDetailsByIdQuery = (productId) => connection.query('SELECT * FROM products WHERE id = $1', [productId]);

module.exports = getProductDetailsByIdQuery;
