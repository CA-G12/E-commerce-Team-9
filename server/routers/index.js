const router = require('express').Router();
const { login, signup } = require('../controllers');

router.post('/signup', signup);
router.post('/login', login);

module.exports = router;
