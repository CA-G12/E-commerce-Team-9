/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-console */
const { getUserProductsByIdQuery } = require('../../database/queries');

const getUserProductsById = (req, res) => {
  const { id } = req.token;
  getUserProductsByIdQuery(id)
    .then((data) => res.status(200).send({
      data: data.rows,
      isLogged: req.token ? true : false,
    }))
    .catch((err) => console.log(err));
};

module.exports = getUserProductsById;
