import React from 'react';
import Header from '../../components/Header';
import Article from '../../components/Article';
import TodoForm from '../../forms/TodoForm';
import Footer from '../../components/Footer';

const TodoCreate = () => (
  <div className="container">
    <Header />
    <Article className="content">
      <div className="section">
        <TodoForm />
      </div>
    </Article>
    <Footer />
  </div>
);

export default TodoCreate;
