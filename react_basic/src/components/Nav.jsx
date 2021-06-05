import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav style={{ background: "#666" }}>
      <ul style={{ display: 'flex', listStyle: 'none' }}>
        <li style={{ margin: 10 }}><NavLink exact to="/" style={{ color: "#fff", textDecoration: 'none' }} activeStyle={{ color: '#aaf' }}>Home</NavLink></li>
        <li style={{ margin: 10 }}><NavLink exact to="/about" style={{ color: "#fff", textDecoration: 'none' }} activeStyle={{ color: '#aaf' }}>About</NavLink></li>
      </ul>
    </nav>
  );
};

export default Nav;
