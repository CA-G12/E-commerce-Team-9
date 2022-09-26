require('dotenv').config();
const jwt = require('jsonwebtoken');

const { SECRET_KEY } = process.env;

const generateToken = (payload) => new Promise((resolve, reject) => {
  jwt.sign(payload, SECRET_KEY, (error, decoded) => {
    if (error) {
      reject(error);
    } else {
      resolve(decoded);
    }
  });
});

module.exports = generateToken;
