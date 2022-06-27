const ErrorHandler = require('../utils/ErrorHandler');

function errorHandlerMiddleware(err, _req, res, _next) {
  if (err instanceof ErrorHandler) {
    res.status(err.code).json(err.message);
    return;
  }

  res.status(500).json('Oops! Something went wrong!');
}

module.exports = errorHandlerMiddleware;