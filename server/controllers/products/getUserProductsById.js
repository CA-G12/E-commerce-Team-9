/* eslint-disable no-console */
const { getUserProductsByIdQuery } = require('../../database/queries');

const getUserProductsById = (req, res) => {
  const { userId } = req.params;
  getUserProductsByIdQuery(userId)
    .then((data) => res.status(200).send(data.rows))
    .catch((err) => console.log(err));
};

module.exports = getUserProductsById;
