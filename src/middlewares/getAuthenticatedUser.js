const jwt = require('jsonwebtoken');

const getAuthenticatedUser = async (req, _res, next) => {
  const token = req.headers.authorization;
  const SECRET = process.env.JWT_SECRET;

  const { payload } = jwt.verify(token, SECRET);

  req.user = payload.id;

  next();
};

module.exports = getAuthenticatedUser;