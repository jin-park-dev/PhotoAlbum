import React from 'react';

import { NavLink } from 'react-router-dom';

const Header = () => {
  const activeStyle = { color: 'blue' };
  return (
    <nav>
      <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
      {' | '}
      <NavLink to="/albums" activeStyle={activeStyle}>Albums</NavLink>
      {' | '}
      <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
    </nav>
  );
};

export default Header;

