import React from 'react';
import PropTypes from 'prop-types';

const Section = (props) => {
  const { children } = props;

  return (
    <section>
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
