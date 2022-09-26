const getUserProductsByIdQuery = require('./getUserProductsById');
const deleteProductByIdQuery = require('./deleteProductById');
const addNewProductToCartQuery = require('./addNewProductToCart');

const getAllProductsQuery = require('./getAllProductsQuery');

module.exports = {
  getUserProductsByIdQuery,
  deleteProductByIdQuery,
  addNewProductToCartQuery,
  getAllProductsQuery,
};
