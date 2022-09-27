const getUserProductsByIdQuery = require('./getUserProductsById');
const deleteProductByIdQuery = require('./deleteProductById');
const addNewProductToCartQuery = require('./addNewProductToCart');
const getAllProductsQuery = require('./getAllProductsQuery');
const FilterProductsByCategoryQuery = require('./filterProductCategoryQuery');
const { filterPriceAscQuery, filterPriceDescQuery } = require('./filterByPriceQuery');

module.exports = {
  filterPriceDescQuery,
  filterPriceAscQuery,
  FilterProductsByCategoryQuery,
  getUserProductsByIdQuery,
  deleteProductByIdQuery,
  addNewProductToCartQuery,
  getAllProductsQuery,
};
