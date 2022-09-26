const { getAllProductsQuery } = require('./products');
const { signupQuery, selectUserByEmail, loginQuery } = require('./register');

module.exports = {
  getAllProductsQuery,
  signupQuery,
  loginQuery,
  selectUserByEmail,
};
