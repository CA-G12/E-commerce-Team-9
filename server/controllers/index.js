const {
  getAllProducts, getUserProductsById, deleteProductById, addNewProductToCart,
} = require('./products');

const { signup, login } = require('./register');

module.exports = {
  getUserProductsById,
  deleteProductById,
  addNewProductToCart,
  getAllProducts,
  signup,
  login,
};
