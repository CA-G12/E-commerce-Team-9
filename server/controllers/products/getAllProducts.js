const { getAllProductsQuery } = require('../../database/queries');

const getAllProducts = async (req, res) => {
  try {
    const data = await getAllProductsQuery();
    res.json(data.rows);
  } catch (err) {
    console.log(err);
  }
};

module.exports = getAllProducts;
