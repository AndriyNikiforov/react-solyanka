import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import Header from '../../components/Header';
import Article from '../../components/Article';
import TextBlock from '../../components/TextBlock';
import List from '../../components/List';
import Footer from '../../components/Footer';
import { getAllTodoResult } from '../../reducers/todo';
import todos from '../../actions/todo';

const mapStateToProps = (state) => ({
  todos: getAllTodoResult(state),
});

const Home = ({ todos: todosData }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(todos.request());
  }, [dispatch]);
  console.log(todosData);
  return (
    <div className="container">
      <Header />
      <Article className="content">
        <div className="section">
          <TextBlock text="TODO" />
          <List data={todosData} />
        </div>
      </Article>
      <Footer />
    </div>
  );
};

Home.propTypes = {
  todos: PropTypes.objectOf(PropTypes.any),
};

Home.defaultProps = {
  todos: {},
};

export default connect(mapStateToProps)(Home);
