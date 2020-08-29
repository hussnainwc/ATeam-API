class Base {
  constructor() {}

  response(data) {
    return {
      success: true,
      data: data,
    };
  }

  error(message) {
    return {
      success: false,
      message: message,
    };
  }

  updateOptions() {
    return {
      new: true,
      useFindAndModify: false,
    };
  }

  deleteOptions() {
    return {
      useFindAndModify: false,
    };
  }
}

module.exports = Base;
