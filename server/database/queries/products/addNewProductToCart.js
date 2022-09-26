const connection = require('../../config/connection');

let count = 0;
const addNewProductToCartQuery = (userId, productId) => {
  count += 1;
  return connection.query('INSERT INTO cart(user_id, product_id, count) VALUES ($1, $2, $3) ON CONFLICT (user_id, product_id) DO UPDATE SET  count = $3 RETURNING *', [userId, productId, count]);
};

module.exports = addNewProductToCartQuery;
