const {
  getAllProducts, getUserProductsById, deleteProductById, addNewProductToCart,
} = require('./products');

const { signup, login, logout } = require('./register');

module.exports = {
  getUserProductsById,
  deleteProductById,
  addNewProductToCart,
  getAllProducts,
  signup,
  login,
  logout,
};
