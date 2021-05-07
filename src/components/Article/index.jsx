import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ children }) => (
  <article className="content">
    {children}
  </article>
);

Article.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Article;
