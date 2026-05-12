const User = require("../models/user");
const bcrypt = require("bcrypt");

let signup_get = (req, res) => {
  res.render("signup");
};

let signup_post = async (req, res) => {
  let { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Please provide email and password" });
  }
  if (!email.endsWith("@gmail.com")) {
    return res
      .status(400)
      .json({ message: "Please provide a valid Gmail address" });
  }
  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: "Password must be at least 6 characters" });
  }

  const user = await User.findOne({ email: email });
  if (user) {
    return res.status(409).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  await new User({
    email: email,
    password: hashedPassword,
  }).save();
  res.status(200).redirect("/login");
};

module.exports = { signup_get, signup_post };
