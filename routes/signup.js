const express = require("express");
const router = express.Router();
require("dotenv").config();
const { signup_get, signup_post } = require("../controllers/signup_controller");

router.get("/", signup_get);

router.post("/", signup_post);

module.exports = router;
