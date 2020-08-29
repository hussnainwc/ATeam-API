const bcrypt = require("bcrypt");

async function salt(length = 12) {
  return await bcrypt.genSalt(length);
}

async function hash(password, salt) {
  return await bcrypt.hash(password, salt);
}

async function check(password, hash) {
  const valid = await bcrypt.compare(password, hash);
  if (!valid) throw new Error("Invalid email or password");
  return null;
}

exports.salt = salt;
exports.hash = hash;
exports.check = check;
