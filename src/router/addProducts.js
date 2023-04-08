const user = require("../../db/signup");
const product = require("../../db/product");

const addProducts = async (req, res, next) => {
  const { name, price, category, company, userId } = req.body;
  try {
    if ((name, price, category, company, userId)) {
      let auth = await user.findOne({ _id: userId });
      if (auth) {
        const data = new product(req.body);
        await data.save();
        res.json({ mgs: "Data Save", code: 0 });
      } else {
        res.json({ mgs: "somthing wrong plz wait", code: 1 });
      }
    } else {
      res.json({ mgs: "Erro in field name. plz wait we well", code: 2 });
    }
  } catch (error) {
    if (error.name === "ValidationError") {
      res.json({ mgs: "fill the from properly", code: 2 });
    } else if(error.path == "_id") {
      res.json({ mgs: "Id not found", code: 2 });
      
    }else if(error.code == 11000){
      res.json({ mgs: "Product already exiest", code: 2 });
    }else{
      res.json(error);
    }
  }
};
module.exports = addProducts;
