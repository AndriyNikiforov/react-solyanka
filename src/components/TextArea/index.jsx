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
    rows="30"
  />
);

TextArea.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

TextArea.defaultProps = {
  name: '',
  value: '',
  className: '',
  placeholder: '',
  onChange: () => {},
};

export default TextArea;
