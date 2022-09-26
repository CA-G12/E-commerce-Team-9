const connection = require('../../config/connection');

const getUserProductsByIdQuery = (userId) => connection.query('SELECT products.id, products.name, products.price, products.category, products.description, products.image FROM products JOIN cart ON cart.product_id = products.id AND cart.user_id = $1', [userId]);

module.exports = getUserProductsByIdQuery;
