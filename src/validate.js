const validateNumber = (input) => {
  if (/[0-9]/.test(input) === false) {
    throw new Error("Please input a number");
  } else {
    return true;
  }
};

const validateEmail = (input) => {
  if (/@/.test(input) === false || /.com/.test(input) === false) {
    throw new Error("Please input a valid email address");
  } else {
    return true;
  }
};

module.exports = {
  validateNumber: validateNumber,
  validateEmail: validateEmail,
};
