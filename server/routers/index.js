const { Router } = require('express');

const getProducts = require('./products');

const router = Router();

router.use('/products', getProducts);

module.exports = router;
