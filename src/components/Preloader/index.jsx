import React from 'react';
import { useSelector } from 'react-redux';

const Preloader = () => {
  const isLoading = useSelector((state) => state.loadingTodo);

  return (isLoading) ? (
    <span className="preloader-overlay">
      <span className="preloader-spinner" />
      <span className="preloader-spinner" />
    </span>
  ) : (<></>);
};

export default Preloader;
