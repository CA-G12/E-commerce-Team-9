/* eslint-disable no-console */
const { addNewProductToCartQuery } = require('../../database/queries');

const addNewProductToCart = (req, res) => {
  const { id } = req.token;
  const { productId } = req.params;
  addNewProductToCartQuery(id, productId)
    .then((data) => res.status(200).json({ productData: data.rows[0], msg: 'product added successfully!' }))
    .catch((err) => console.log(err));
};

module.exports = addNewProductToCart;
