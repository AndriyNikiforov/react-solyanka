import React from 'react';
import PropTypes from 'prop-types';

const Label = (props) => {
  const { className, htmlFor, text } = props;

  return (
    <label htmlFor={htmlFor} className={className}>
      {text}
    </label>
  );
};

Label.propTypes = {
  text: PropTypes.string,
  htmlFor: PropTypes.string,
  className: PropTypes.string,
};

Label.defaultProps = {
  text: '',
  htmlFor: '',
  className: '',
};

export default Label;
