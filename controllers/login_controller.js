const jwt = require("jsonwebtoken");
const User = require("../models/user");
const bcrypt = require("bcrypt");

let get_login = (req, res) => {
  res.render("login");
};

let post_login = async (req, res) => {
  let { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Please provide email and password" });
  }

  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(404).json({ message: "Please signup first" });
  }

  const matchedPassword = await bcrypt.compare(password, user.password);
  if (!matchedPassword) {
    return res.status(401).json({ message: "Incorrect password" });
  }

  const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    maxAge: 60 * 60 * 1000,
  });
  res.status(200).json({ message: "Login successful" });
};

module.exports = { get_login, post_login };
