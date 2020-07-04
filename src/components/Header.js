import React from 'react'
import logo from '../assets/static/logo.jpg';

import '../assets/styles/components/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} />
      </div>
      <nav className="header__menu">
        <ul className="header__menu--list">
          <li>ABOUT ME</li>
          <li>MUSIC</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
