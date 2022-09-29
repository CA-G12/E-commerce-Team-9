/* eslint-disable prefer-destructuring */
const bcrypt = require('bcrypt');
const { CustomError, generateToken } = require('../../utils/helpers');
const { loginQuery } = require('../../database/queries');
const { validate, loginSchema } = require('../../utils/validation');

const login = (req, res) => {
  const { email, password } = req.body;
  let user;

  validate(loginSchema, { email, password })
    .then(() => loginQuery(email))
    .then((data) => {
      user = data.rows[0];
      if (!user) {
        throw new CustomError('Please double check your password and email', 400);
      }
      return bcrypt.compare(password, user.hashedpassword);
    }).then((isPasswordMatched) => {
      if (!isPasswordMatched) {
        throw new CustomError('Please double check your password and email', 400);
      } else {
        return generateToken({ id: user.id });
      }
    })
    .then((jwt) => res.cookie('token', jwt, { httpOnly: true }).json({ message: 'Logged in successfully' }))
    .catch((err) => res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' }));
};

module.exports = login;
