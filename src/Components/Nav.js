import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav class="main-nav">
        <ul>
          <li><NavLink to="/nature">Nature</NavLink></li>
          <li><NavLink to="/food">Food</NavLink></li>
          <li><NavLink to="/creative">Creative</NavLink></li>
        </ul>
      </nav>
    );
}

export default Nav;