const express = require("express");
const router = express.Router();
const { get_login, post_login } = require("../controllers/login_controller");

router.get("/", get_login);

router.post("/", post_login);

module.exports = router;
