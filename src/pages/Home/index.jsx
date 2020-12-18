import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
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
  const token = Cookies.get('token');

  useEffect(() => {
    dispatch(todos.request());
  }, [dispatch]);

  return (
    <div className="container">
      <Header />
      <Article className="content">
        <div className="section">
          <TextBlock text="TODO" />
          {
            (token) ? <List data={todosData} /> : 'Empty'
          }
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
