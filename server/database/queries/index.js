const {
  getAllProductsQuery, getUserProductsByIdQuery, deleteProductByIdQuery, addNewProductToCartQuery,
} = require('./products');

const { signupQuery, selectUserByEmail, loginQuery } = require('./register');

module.exports = {
  getUserProductsByIdQuery,
  deleteProductByIdQuery,
  addNewProductToCartQuery,
  getAllProductsQuery,
  signupQuery,
  loginQuery,
  selectUserByEmail,
};
