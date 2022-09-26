const router = require('express').Router();

const verifyToken = require('../middlewares/verifyToken');
const {
  login, signup, logout, getUserProductsById, deleteProductById, addNewProductToCart,
  filterProductsByCategory,
  filterPriceAsc,
  filterPriceDesc,
} = require('../controllers');
const getProducts = require('./products');

router.use('/products', getProducts);
router.get('/userProducts', verifyToken, getUserProductsById);
router.post('/products/:productId', verifyToken, addNewProductToCart);
router.delete('/products/:productId', verifyToken, deleteProductById);
router.get('/products/:category', filterProductsByCategory);
router.get('/priceAsc', filterPriceAsc);
router.get('/priceDesc', filterPriceDesc);

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);

module.exports = router;
