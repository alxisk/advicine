import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';

const Header = () => (
  <header className="header">
    <div className="wrap header__wrap">
      <Link to="/" className="header__logo">Advicine</Link>
      <Navbar />
    </div>
  </header>
);

export default Header;
