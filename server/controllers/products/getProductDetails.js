const { getProductDetailsByIdQuery } = require('../../database/queries');

const getProductDetailsById = (req, res) => {
  const { productId } = req.params;

  getProductDetailsByIdQuery(productId)
    .then((data) => res.send(data.rows[0]))
    .catch((err) => console.log(err));
};

module.exports = getProductDetailsById;
