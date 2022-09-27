const { FilterProductsByCategoryQuery } = require('../../database/queries');

const filterProductsByCategory = (req, res, next) => {
  const { category } = req.params;
  FilterProductsByCategoryQuery(category)
    .then((data) => {
      if (!data.rowCount) {
        next();
      }
      res.status(200).json(data.rows);
    })
    .catch((err) => err.status(500).json({ msg: 'Internal Server Error' }));
};

module.exports = filterProductsByCategory;
