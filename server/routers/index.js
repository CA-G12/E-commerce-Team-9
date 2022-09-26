const router = require('express').Router();

const {
  login, signup, getUserProductsById, deleteProductById, addNewProductToCart,
} = require('../controllers');
const getProducts = require('./products');

router.get('/produtcs/:userId', getUserProductsById);
router.post('/products/:newProductId', addNewProductToCart);
router.use('/products', getProducts);
router.delete('/products/:productId', deleteProductById);

router.post('/signup', signup);
router.post('/login', login);

module.exports = router;
