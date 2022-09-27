const {
  getAllProductsQuery, getUserProductsByIdQuery, deleteProductByIdQuery, addNewProductToCartQuery,
  getProductDetailsByIdQuery,
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
  getProductDetailsByIdQuery,
  signupQuery,
  loginQuery,
  selectUserByEmail,
  FilterProductsByCategoryQuery,
};
