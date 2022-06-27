const ErrorHandler = require('../utils/ErrorHandler');
const validateToken = require('../utils/validateToken');

const authValidation = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    next(ErrorHandler.unauthorized({ message: 'Token not found' }));
    return;
  }

  const authCheck = await validateToken(token);

  if (!authCheck) {
    next(ErrorHandler.unauthorized({ message: 'Expired or invalid token' }));
    return;
  }

  next();
};

module.exports = authValidation;