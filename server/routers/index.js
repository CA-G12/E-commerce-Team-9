const router = require('express').Router();

const { getUserProductsById, deleteProductById, addNewProductToCart } = require('../controllers');

router.get('/produtcs/:userId', getUserProductsById);

router.delete('/products/:productId', deleteProductById);

router.post('/products/:newProductId', addNewProductToCart);

module.exports = router;
