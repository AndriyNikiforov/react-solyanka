import React from 'react';
import Header from '../../components/Header';
import Article from '../../components/Article';
import TodoForm from '../../forms/TodoForm';
import Footer from '../../components/Footer';

const TodoFormPage = () => (
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

export default TodoFormPage;
