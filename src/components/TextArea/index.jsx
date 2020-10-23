import React from 'react';
import PropTypes from 'prop-types';

const TextArea = (props) => {
  const {
    placeholder, value, className, onChange, name,
  } = props;

  return (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      className={className}
      onChange={onChange}
    />
  );
};

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
