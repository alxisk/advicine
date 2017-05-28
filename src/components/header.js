import React from 'react';
import Navbar from './navbar';

const Header = () => (
  <header className="header">
    <div className="wrap header__wrap">
      <div className="header__logo">
        <img src="#" alt="logo"/>
      </div>
      <Navbar />
    </div>
  </header>
);

export default Header;
