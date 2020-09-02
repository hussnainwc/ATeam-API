/*
 * Middleware to validate tokens
 */
const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = (req, res, next) => {
  let token = req.header("x-access-token");

  if (!token) return res.status(401).send("Access denied. No token provided");

  try {
    let payload = jwt.verify(token, config.get("jwtAccessKey"));

    req.user = payload;

    next();
  } catch (e) {
    res.status(400).send("Invalid token");
  }
};
