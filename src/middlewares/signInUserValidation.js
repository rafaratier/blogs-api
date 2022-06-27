const ErrorHandler = require('../utils/ErrorHandler');

const singInUserValidation = (req, _res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    next(ErrorHandler
      .badRequest({ message: 'Some required fields are missing' }));
    return;
  }

  next();
};

module.exports = singInUserValidation;