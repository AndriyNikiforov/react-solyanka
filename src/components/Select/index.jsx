import React from 'react';
import PropTypes from 'prop-types';

const SelectItems = ({ data }) => {
  const items = data.map((item) => `
    <option>${item.name}</option>
  `);

  return `
    <select>${items}</select>
  `;
};

const Select = ({ data }) => (<SelectItems data={data} />);

Select.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

Select.defaultProps = {
  data: [{}],
};
