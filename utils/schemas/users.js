const joi = require('joi');

const userIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);

const createUserSchema = {
  name: joi.string().max(20).required(),
  email: joi.string().email().required(),
  passsword: joi.string().required(),
  isAdmin: joi.boolean(),
};

module.exports = {
  userIdSchema,
  createUserSchema,
};
