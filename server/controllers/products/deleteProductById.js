/* eslint-disable no-console */
const { deleteProductByIdQuery } = require('../../database/queries');

const deleteProductById = (req, res) => {
  const { productId } = req.params;
  deleteProductByIdQuery(productId)
    .then((data) => res.status(200).json(data.rows))
    .catch((err) => console.log(err));
};

module.exports = deleteProductById;
