import React from 'react';
import PropTypes from 'prop-types';

const Article = (props) => {
  const { children } = props;

  return (
    <article className="content">
      {children}
    </article>
  );
};

Article.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Article;
