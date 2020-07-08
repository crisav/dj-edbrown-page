import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/static/logo.jpg';

import '../assets/styles/components/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <ul className="header__menu">
        <li><Link to="/contact">CONTACT</Link></li>
        <li><Link to="/music">MUSIC</Link></li>
        <li className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </li>
        <li>
          <a href="https://open.spotify.com/artist/78DhFNd9KFhRlJCmlcquj4" target="_blank" >
            <i className="fab fa-spotify"></i>SPOTIFY
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UC0kb_m7TEqeYANFBgDiPRPA" target="_blank" >
            <i className="fab fa-youtube"></i>YOUTUBE
          </a>
        </li>
      </ul>
    </header>
  )
}

export default Header;
