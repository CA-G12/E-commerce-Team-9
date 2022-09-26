const loginSchema = require('./loginValidate');
const signupSchema = require('./signupValidate');
const validate = require('./validator');

module.exports = { validate, signupSchema, loginSchema };
