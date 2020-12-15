import React from 'react';
import Header from '../../components/Header';
import Article from '../../components/Article';
import SignUpForm from '../../forms/SignUpForm';
import Footer from '../../components/Footer';

const SignUp = () => (
  <div className="container">
    <Header />
    <Article className="content">
      <div className="section">
        <SignUpForm />
      </div>
    </Article>
    <Footer />
  </div>
);

export default SignUp;
