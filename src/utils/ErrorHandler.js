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