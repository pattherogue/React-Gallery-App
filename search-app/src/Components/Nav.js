import React from 'react';
import { NavLink } from 'react-rouer-dom';

const Nav = () => {
    return (
        <nav class="main-nav">
        <ul>
          <li><a href='#'>Nature</a></li>
          <li><a href='#'>Food</a></li>
          <li><a href='#'>Creative</a></li>
        </ul>
      </nav>
    );
}

export default Nav;