import React from 'react';
import Header from '../../components/Header';
import Article from '../../components/Article';
import SignInForm from '../../forms/SignInForm';
import Footer from '../../components/Footer';

const SignIn = () => (
  <div className="container">
    <Header />
    <Article className="content">
      <div className="section">
        <SignInForm />
      </div>
    </Article>
    <Footer />
  </div>
);

export default SignIn;
