const getUserProductsById = require('./getUserProductsById');
const deleteProductById = require('./deleteProductById');
const addNewProductToCart = require('./addNewProductToCart');
const getAllProducts = require('./getAllProducts');
const getProductDetailsById = require('./getProductDetails')
const filterProductsByCategory = require('./filterProductsByCategory');
const { filterPriceAsc, filterPriceDesc } = require('./filterByPrice');

module.exports = {
  filterPriceDesc,
  filterPriceAsc,
  getUserProductsById,
  deleteProductById,
  addNewProductToCart,
  getAllProducts,
  getProductDetailsById,
  filterProductsByCategory,
};
