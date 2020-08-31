const Joi = require("@hapi/joi");

module.exports = (club) => {
  const {error, value} = Joi.object({
    name: Joi.string().min(2).max(255).required(),
  }).validate(club);

  if (error) throw error.details[0];
  return value;
};
