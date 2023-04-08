const product = require('../../db/product');
const searchdata = async (req, res, next) => {
    const {find} = req.params;
  try {
    const productData = await product.find({name:{$regex:find}})
    res.json(productData);
  } catch (error) {
    console.log(error);
  }
};

module.exports = searchdata;
