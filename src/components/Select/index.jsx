import React from 'react';
import PropTypes from 'prop-types';

const SelectItems = (props) => {
  const { data } = props;

  const items = data.map((item) => `
    <option>${item.name}</option>
  `);

  return `
    <select>${items}</select>
  `;
};

const Select = (props) => {
  const { data } = props;

  return <SelectItems data={data} />;
};

Select.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

Select.defaultProps = {
  data: [{}],
};
