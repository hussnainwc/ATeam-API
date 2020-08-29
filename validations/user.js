const Joi = require("@hapi/joi");

module.exports = (user) => {
  const {error, value} = Joi.object({
    name: Joi.string().min(2).max(255).required(),
    email: Joi.string().min(5).max(255).email().required(),
    password: Joi.string().min(8).max(1024).required(),
  }).validate(user);

  if (error) throw error.details[0];
  return value;
};
