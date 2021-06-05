import React from 'react';

const Nav = () => {
  return (
    <nav style={{ background: "#666" }}>
      <ul style={{ display: 'flex', listStyle: 'none' }}>
        <li style={{ margin: 10 }}><a href="/" style={{ color: "#fff", textDecoration: 'none' }}>Home</a></li>
        <li style={{ margin: 10 }}><a href="/about" style={{ color: "#fff", textDecoration: 'none' }}>About</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
