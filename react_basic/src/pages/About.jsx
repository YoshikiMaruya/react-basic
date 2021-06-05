import React from 'react';

const About = () => {
  return (
    <div>
      <nav style={{ background: "#666" }}>
        <ul style={{ display: 'flex', listStyle: 'none' }}>
          <li style={{ margin: 10 }}><a href="/" style={{ color: "#fff", textDecoration: 'none' }}>Home</a></li>
          <li style={{ margin: 10 }}><a href="/about" style={{ color: "#fff", textDecoration: 'none' }}>About</a></li>
        </ul>
      </nav>

      <header style={{ height: 200, background: "#ddd" }}>
        header
      </header>

      <div id="main" style={{ height: 300, background: "#eee" }}>
        main(About)
      </div>

      <footer style={{ height: 100, background: "#666", color: "#fff" }}>
        footer
      </footer>
    </div>
  );
};

export default About;
