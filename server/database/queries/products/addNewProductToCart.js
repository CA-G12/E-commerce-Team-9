const connection = require('../../config/connection');

const addNewProductToCartQuery = (userId, productId) => connection.query(`INSERT INTO cart(user_id, product_id) VALUES ($1, $2) 
ON CONFLICT (user_id, product_id) DO UPDATE SET  count = cart.count + 1 RETURNING *
  `, [userId, productId]);

module.exports = addNewProductToCartQuery;
