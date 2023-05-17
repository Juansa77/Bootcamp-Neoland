const setError = (code, message) => {
  const error = newError();
  error.code = code;
  error.message = message;
  return error;
};

module.exports = setError;
