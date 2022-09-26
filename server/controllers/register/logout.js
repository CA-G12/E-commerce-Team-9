const logout = (req, res) => {
  res.clearCookie('token').json({ msg: 'Logged out successfully!' });
};

module.exports = logout;
