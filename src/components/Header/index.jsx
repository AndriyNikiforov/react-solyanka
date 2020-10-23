import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <nav>
      <ul className="list">
        <li className="link">
          <Link to="/">Home</Link>
        </li>
        <li className="link">
          <Link to="/create">Todo</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
