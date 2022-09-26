const router = require('express').Router();

const getProducts = require('./products');
const { login, signup } = require('../controllers');

router.use('/products', getProducts);

router.post('/signup', signup);
router.post('/login', login);

module.exports = router;
