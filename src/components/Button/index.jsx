import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { name, className, text } = props;

  return (
    <button type="submit" name={name} className={className}>{text}</button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  text: '',
  name: '',
  className: '',
};

export default Button;
