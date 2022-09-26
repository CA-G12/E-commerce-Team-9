const {
  getAllProductsQuery, getUserProductsByIdQuery, deleteProductByIdQuery, addNewProductToCartQuery,
  FilterProductsByCategoryQuery,
  filterPriceDescQuery,
  filterPriceAscQuery,
} = require('./products');

const { signupQuery, selectUserByEmail, loginQuery } = require('./register');

module.exports = {
  filterPriceAscQuery,
  filterPriceDescQuery,
  getUserProductsByIdQuery,
  deleteProductByIdQuery,
  addNewProductToCartQuery,
  getAllProductsQuery,
  signupQuery,
  loginQuery,
  selectUserByEmail,
  FilterProductsByCategoryQuery,
};
