class ErrorHandler {
  async handler(error, request, response, next) {
    console.log({
      errorName: error.name,
      message: error.message,
      stack: error.stack,
    });

    response.sendStatus(500);
  }
}

module.exports = new ErrorHandler();
