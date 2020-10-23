import React from 'react';
import PropTypes from 'prop-types';

const TextBlock = (props) => {
  const { text } = props;

  return (
    <p className="text-block">
      {text}
    </p>
  );
};

TextBlock.propTypes = {
  text: PropTypes.string,
};

TextBlock.defaultProps = {
  text: '',
};

export default TextBlock;
