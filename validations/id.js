const Joi = require("@hapi/joi");
Joi.objectId = require("joi-objectid")(Joi);

module.exports = (id) => {
  const {error, value} = Joi.objectId().validate(id);
  if (error) throw error.details[0];
  return value;
};
