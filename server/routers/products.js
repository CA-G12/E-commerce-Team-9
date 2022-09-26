const getProducts = require('express').Router();

const { getAllProducts } = require('../controllers');

getProducts.get('/', getAllProducts);
module.exports = getProducts;
