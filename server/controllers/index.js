const {
  getAllProducts, getUserProductsById, deleteProductById, addNewProductToCart,
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
  signup,
  login,
  logout,
};
