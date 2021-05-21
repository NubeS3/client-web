const preValidateEmailLogin = (email = '') => {
  if (email === '') {
    return 'Please enter your email';
  }

  if (!/^[^\s@]+@[^\s@]+$/.test(email)) {
    return 'Invalid email. Try again.';
  }

  return '';
};

const preValidatePasswordLogin = ({ password = '' }) => {
  if (password === '') {
    return 'Please enter password';
  }

  if (password.length < 8) {
    return 'Invalid email or password. Try again.';
  }

  return '';
};

export { preValidateEmailLogin, preValidatePasswordLogin };
