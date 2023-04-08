const signUp = require("./../../db/signup");

const signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (name && email && password && password.length >= 4) {
      const data = new signUp({ name, email, password })
      await data.save();
      data.password = null;
      req.mgs = { mgs: "Singup successful",code:1 };
      next();
    } else {
      res.json({ mgs: "Plz fill up all the fields",code:2 });
    }
  } catch (error) {
    if (error.code == 11000) {
      res.json({ mgs: "You have already account plz login",code:3 });
    } else if (error._message == "signup validation failed") {
      res.json({ mgs: "Password must be 4 latter at-list",code:4 });
    } else {
      res.json(error);
    }
  }
};

module.exports = signup;
