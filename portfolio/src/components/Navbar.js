import React from 'react';
import { navLinks } from '../contants';
const Navbar = ({ setActivePage,activePage }) => {
  return ( 
  <nav className="navbar">
    <ul className="navbar-list">
      {
        navLinks.map(item=>{
          const isActive = item.name == activePage;
          return (
            <li className="navbar-item">
              <button className={`navbar-link ${isActive?"active":""}`} onClick={() => setActivePage(item.name)} data-nav-link>{item.name}</button>
            </li>
          )
        })
      }
    </ul>
  </nav>
);
}

export default Navbar;
