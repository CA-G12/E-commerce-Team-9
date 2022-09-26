/* eslint-disable no-console */
const { addNewProductToCartQuery } = require('../../database/queries');

const addNewProductToCart = (req, res) => {
  const { newProductId } = req.params;
  addNewProductToCartQuery(1, newProductId)
    .then((data) => res.status(200).json(data.rows[0]))
    .catch((err) => console.log(err));
};

module.exports = addNewProductToCart;
