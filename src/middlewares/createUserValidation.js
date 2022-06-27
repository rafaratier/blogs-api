const ErrorHandler = require('../utils/ErrorHandler');

const createUserValidation = (req, _res, next) => {
  const { displayName, email, password } = req.body;
  const EMAIL_REGEX = /\S+@\S+\.\S+/;

  if (displayName.length < 8) {
    next(ErrorHandler
      .badRequest({ message: '"displayName" length must be at least 8 characters long' }));
    return;
  }

  if (!EMAIL_REGEX.test(email)) {
    next(ErrorHandler
      .badRequest({ message: '"email" must be a valid email' }));
    return;
  }

  if (password.length < 6) {
    next(ErrorHandler
      .badRequest({ message: '"password" length must be at least 6 characters long' }));
    return;
  }

  next();
};

module.exports = createUserValidation;