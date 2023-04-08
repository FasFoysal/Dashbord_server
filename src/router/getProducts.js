const product = require("../../db/product");

const getProducts = async (req, res, next) => {
  try {
    const data = await product.find({});
    res.json({ data, code: 0 });
  } catch (error) {
    console.log(error);
  }
};

module.exports = getProducts;
