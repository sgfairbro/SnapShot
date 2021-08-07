import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/Roosta">Roosta</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
