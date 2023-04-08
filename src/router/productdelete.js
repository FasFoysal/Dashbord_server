const product = require("../../db/product");
const user = require("../../db/signup");

const productdelete = async (req, res, next) => {
  const { userid, productid } = req.query;
  if (userid && productid) {
    try {
      let getProducts = await product.findOne({ _id: productid });
      if (req.userData == getProducts.userId) {
        await product.findByIdAndDelete({_id:productid});
        res.json({ mgs: "Data delete successful", code: 0 });
      } else {
        res.json({ mgs: "user Data not found", code: 1 });
      }
    } catch (error) {
      if (error.name === "CastError") {
        res.json({ mgs: "poduct not found", code: 2 });
      } else {
        res.json({ mgs: "Id not found", code: 2 });
      }
    }
  } else {
    res.json({ mgs: "Id not get", code: 3 });
  }
};

module.exports = productdelete;
