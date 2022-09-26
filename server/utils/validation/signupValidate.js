const joi = require('joi');

const signupSchema = joi.object({
  username: joi.string().required(),
  password: joi.string().required(),
  confirm_password: joi.ref('password'),
  email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
});

module.exports = signupSchema;
