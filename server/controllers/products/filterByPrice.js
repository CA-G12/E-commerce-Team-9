const { filterPriceAscQuery, filterPriceDescQuery } = require('../../database/queries/products/filterByPriceQuery');

const filterPriceAsc = (req, res) => {
  filterPriceAscQuery()
    .then((data) => res.json(data.rows))
    .catch((err) => err.status(500).json({ msg: 'Internal Server Error' }));
};

const filterPriceDesc = (req, res) => {
  filterPriceDescQuery()
    .then((data) => res.json(data.rows))
    .catch((err) => err.status(500).json({ msg: 'Internal Server Error' }));
};

module.exports = { filterPriceAsc, filterPriceDesc };
