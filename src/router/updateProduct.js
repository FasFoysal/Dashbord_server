const product = require("./../../db/product");
const updateProduct = async (req, res, next) => {
  const { name, price, category, company, userId } = req.body;
  const { productid } = req.query;
  try {
    if (
      name &&
      price &&
      category &&
      company &&
      userId &&
      userId == req.userData
    ) {
      const verify = await product.findOne({ _id: productid });
      if(verify){
        if (userId == verify.userId) {
          await product.findOneAndUpdate(
            { _id: productid },
            { name, price, category, company },
            { new: true }
          );
          res.json({ mgs: "Data update successful", code: 0 });
        } else {
          res.json({ mgs: "not you product", code: 1 });
        }
      }else{
        res.json({ mgs: "product not exiest", code: 1 });
      }
    } else {
      res.json({ mgs: "Fill the form properly", code: 2 });
    }
  } catch (error) {
    if (error.name == "CastError") {
      res.json({ mgs: "product not found", code: 1 });
    } else {
      res.json(error);
    }
  }
};

module.exports = updateProduct;
