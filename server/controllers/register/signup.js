const bcrypt = require('bcrypt');
const { selectUserByEmail, signupQuery } = require('../../database/queries');
const { generateToken, CustomError } = require('../../utils');
const { validate, signupSchema } = require('../../utils');

const signup = (req, res) => {
  const {
    username, password, confirm_password, email,
  } = req.body;

  validate(signupSchema, {
    username,
    password,
    confirm_password,
    email,
  })
    .then(() => selectUserByEmail(email))
    .then((data) => {
      if (data.rowCount) throw new CustomError('Email already exists', 400);
      else return bcrypt.hash(password, 10);
    })
    .then((hashed) => signupQuery({
      username,
      password: hashed,
      email,
    }))
    .then((result) => {
      const payload = result.rows[0];
      return generateToken({ userID: payload.id });
    })
    .then((jwt) => { res.cookie('token', jwt, { httpOnly: true, secure: true }); res.json({ message: 'Account created successfully' }); })
  // .catch((err) => {
  //   if (err.name === 'ValidationError') {
  //     res.status(400).send({ message: err.message });
  //   }
  //   // res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
  // });
};

module.exports = signup;
