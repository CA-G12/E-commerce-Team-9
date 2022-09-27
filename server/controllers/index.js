const {
  getAllProducts, getUserProductsById, deleteProductById, addNewProductToCart,
  getProductDetailsById,
  filterProductsByCategory,
  filterPriceAsc,
  filterPriceDesc,
} = require('./products');

const { signup, login, logout } = require('./register');

module.exports = {
  filterPriceDesc,
  filterPriceAsc,
  filterProductsByCategory,
  getUserProductsById,
  deleteProductById,
  addNewProductToCart,
  getAllProducts,
  getProductDetailsById,
  signup,
  login,
  logout,
};
