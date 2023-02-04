const responseformat = (statusCode, data, message, res) => {
  res.status(statusCode).json({
    status_code: statusCode,
    info: data,
    message: message,
    // pagination: {
    //   prev: "",
    //   next: "",
    //   max: "",
    // },
  });
};
module.exports = responseformat;
