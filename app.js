const express = require("express");
const path = require("path");
const app = express();

const { hash } = require("crypto");
const { json } = require("stream/consumers");
require("dotenv").config();
const authUser = require("./middlewares/middleware");
const cookieParser = require("cookie-parser");

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("DataBase Connected Successfully!");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.DBURL);
}

//Routes
const login = require("./routes/login");
const signup = require("./routes/signup");

// Index Routes
app.get("/", (req, res) => {
  res.render("index");
});
//Login Routes
app.use("/login", login);

//Signup Routes
app.use("/signup", signup);

app.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.status(200).send("Logged out successfully!");
});

app.get("/dashboard", authUser, (req, res) => {
  res.render("dashboard");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("server started");
});
