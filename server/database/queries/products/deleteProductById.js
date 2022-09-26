/* eslint-disable no-console */
const connection = require('../../config/connection');

const deleteProductByIdQuery = (productId) => {
  return connection.query('DELETE FROM products WHERE id = $1 RETURNING *', [productId]);
};

module.exports = deleteProductByIdQuery;
