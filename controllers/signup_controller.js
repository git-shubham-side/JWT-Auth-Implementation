const User = require("../models/user");
const bcrypt = require("bcrypt");

let signup_get = (req, res) => {
  res.render("signup");
};

let signup_post = async (req, res) => {
  let { email, password } = req.body;
  if (email && password) {
    if (!email.endsWith("@gmail.com"))
      return res.status(400).json({ message: "Please provide valid email" });
    let user = await User.findOne({ email: email });
    if (!user) {
      const hashedPassword = await bcrypt.hash(password, 10);
      await new User({
        email: email,
        password: hashedPassword,
      }).save();

      res.status(200).redirect("/login");
    } else {
      res.json({ message: "User Already Exists" });
    }
  } else {
    res.status(404).json({ message: "Please provide Email & Password" });
  }
};

module.exports = { signup_get, signup_post };
