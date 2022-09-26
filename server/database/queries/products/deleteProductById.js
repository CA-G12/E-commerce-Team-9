/* eslint-disable no-console */
const connection = require('../../config/connection');

const deleteProductByIdQuery = (productId, userId) => connection.query('DELETE FROM cart WHERE product_id = $1 AND user_id = $2  RETURNING *', [productId, userId]);

module.exports = deleteProductByIdQuery;
