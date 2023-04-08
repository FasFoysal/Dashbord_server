const user = require("./../../db/signup");

const auth = async (req, res, next) => {
  let { _id } = req.body;
  let { userid } = req.query
  userid?null:userid = req.params._id;
  if (_id || userid) {
    try {
        let data = await user.find({"$or":[{_id},{_id:userid}]});
        if(data.length){
          req.userData = data[0].id;
          next()
        }else{
          res.json({mgs:"User not found",code:1})
        }
    } catch (error) {
        if(error.name == "CastError"){
            res.json({mgs:"User not found",code:1})
        }else{
            console.log(error);
        }
    }
  } else {
    res.json({ mgs: "Id not found", code: 2 });
  }
};

module.exports = auth;
