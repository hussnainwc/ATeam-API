const express = require("express");
const router = express.Router();
const User = require("../models/User.js");
const validator = require("../validations/user.js");
const jwt = require("../middlewares/jwt.js");
const {toObjectID} = require("../helpers.js");

router.put("/", jwt, async (req, res) => {
  try {
    validator(req.body);
    const user = await User.updateUser(req.user.sub, req.body);
    res.status(200).json(User.response(user));
  } catch (error) {
    if (error.code === 11000) error.message = "This email is already in use";
    return res.status(400).json(User.error(error.message));
  }
});

router.delete("/", jwt, async (req, res) => {
  try {
    const user = await User.deleteUser(toObjectID(req.user.sub));
    res.status(200).json(User.response(user));
  } catch (error) {
    return res.status(400).json(User.error(error.message));
  }
});

module.exports = router;
