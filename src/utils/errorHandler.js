function ErrorHandler(errorName, message) {
  let newError;

  switch (errorName) {
    case 'badRequest':
      newError = { code: 400, msg: message };
      break;
    case 'unauthorized':
      newError = { code: 401, msg: message };
      break;
    case 'notFound':
      newError = { code: 404, msg: message };
      break;
    case 'conflict':
      newError = { code: 409, msg: message };
      break;
    default:
  }

  return newError;
}

module.exports = ErrorHandler;