/* eslint-disable no-console */
const { deleteProductByIdQuery } = require('../../database/queries');

const deleteProductById = (req, res) => {
  const { params: { productId }, token: { id } } = req;
  deleteProductByIdQuery(productId, id)
    .then((data) => {
      if (data.rowCount) {
        res.status(200).json({ msg: 'product deleted successfully!' });
      } else {
        res.status(404).json({ msg: 'product not found!, get out of postman' });
      }
    })
    .catch((err) => console.log(err));
};

module.exports = deleteProductById;
