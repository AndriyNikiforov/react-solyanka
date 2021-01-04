import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
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

const Anime = () => (
  <motion.h1
    initial={{ x: -1000 }}
    animate={{ x: 0 }}
    transition={{
      type: 'tween',
      duration: '2',
      delay: '1',
    }}
  >
    This is your todos.
  </motion.h1>
);

const Home = ({ todos: todosData = {} }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(todos.request());
  }, [dispatch]);

  return (
    <div className="container">
      <Header />
      <Article className="content">
        <Anime />
        <div className="section">
          <TextBlock text="TODO" />
          <List data={todosData} />
        </div>
      </Article>
      <Footer />
    </div>
  );
};

export default connect(mapStateToProps)(Home);
