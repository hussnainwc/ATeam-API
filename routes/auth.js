const express = require("express");
const router = express.Router();
const User = require("../models/User.js");
const {check} = require("../hash.js");
const validator = require("../validations/user.js");

router.post("/register", async (req, res) => {
  try {
    validator(req.body);
    await User.checkUniqueEmail(req.body);
    const user = await User.createUser(req.body);
    res.status(201).json(User.response("Signup successfull"));
  } catch (error) {
    return res.status(400).json(User.error(error.message));
  }
});

router.post("/login", async (req, res) => {
  try {
    req.body.name = "filler-to-pass-validator";
    validator(req.body);
    const user = await User.checkUserExists(req.body);
    await check(req.body.password, user.password);
    const tokens = await User.generateTokens(user);
    res
      .header("x-acess-token", tokens[0])
      .header("x-refresh-token", tokens[1])
      .status(200)
      .json(User.response("Login successfull"));
  } catch (error) {
    return res.status(400).json(User.error(error.message));
  }
});

module.exports = router;
