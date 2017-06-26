import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar header__navbar">
    <ul className="navbar__list">
      <li className="navbar__list-item">
        <NavLink
          to="/best-movies"
          activeClassName="navbar__link--active"
        >Best movies</NavLink>
      </li>
      <li className="navbar__list-item">
        <NavLink
          to="/advanced-search"
          activeClassName="navbar__link--active"
        >Advanced search</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
