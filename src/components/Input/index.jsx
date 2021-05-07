import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  type, placeholder, onChange, className, value, name,
}) => (
  <input
    className={className}
    name={name}
    value={value}
    type={type}
    placeholder={placeholder}
    onChange={onChange}
  />
);

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  name: '',
  type: 'text',
  value: '',
  className: '',
  placeholder: '',
  onChange: () => {},
};

export default Input;
