import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({
  placeholder, value, className, onChange, name,
}) => (
  <textarea
    name={name}
    placeholder={placeholder}
    value={value}
    className={className}
    onChange={onChange}
  />
);

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

TextArea.defaultProps = {
  className: '',
  placeholder: '',
};

export default TextArea;
