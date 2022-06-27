class ErrorHandler {
  constructor(code, message) {
    this.code = code;
    this.message = message;
  }

  static badRequest(msg) {
    return new ErrorHandler(400, msg);
  }
  
  static unauthorized(msg) {
    return new ErrorHandler(401, msg);
  }

  static notFound(msg) {
    return new ErrorHandler(404, msg);
  }

  static conflict(msg) {
    return new ErrorHandler(409, msg);
  }

  static unprocessableEntity(msg) {
    return new ErrorHandler(422, msg);
  }
}

module.exports = ErrorHandler;

// function ErrorHandler(errorName, message) {
//   let newError;

//   switch (errorName) {
//     case 'badRequest':
//       newError = { code: 400, msg: message };
//       break;
//     case 'unauthorized':
//       newError = { code: 401, msg: message };
//       break;
//     case 'notFound':
//       newError = { code: 404, msg: message };
//       break;
//     case 'conflict':
//       newError = { code: 409, msg: message };
//       break;
//     default:
//   }

//   return newError;
// }

// module.exports = ErrorHandler;