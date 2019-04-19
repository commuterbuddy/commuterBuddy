const validator = require('validator');
const isEmpty = require('is-empty');

const validateSignup = (data) => {
  const errors = {};

  data.email = !isEmpty(data.email) ? data.email : '';
  data.username = !isEmpty(data.username) ? data.username : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if (validator.isEmpty(data.username)) {
    errors.username = 'Name field is required';
  }

  if (validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  } else if (!validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  if (!validator.isLength(data.password, { min: 6, max: 20 })) {
    errors.password = 'Password must be at least 6 characters';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = validateSignup;
