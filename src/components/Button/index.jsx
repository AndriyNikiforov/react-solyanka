import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, className, text }) => (
  <button type="submit" name={name} className={className}>{text}</button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
