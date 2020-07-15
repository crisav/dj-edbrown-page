import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/BurgerMenu.scss';
import logo from '../assets/static/logo.jpg';

const BurgerMenu = () => {
  const [x, setX] = useState(-100);

  const handleBurgerMenu = () => {
    if( x === 0 ) {
      setX(-100);
    } else {
      setX(0);
    }
  }  

  return (
    <div className="burger">
      <div className="burger__header">
        <button onClick={ handleBurgerMenu }>
          <i className="fas fa-bars"></i>
        </button>

        <figure className="burger__header--img">
          <Link to="/">
            <img src={logo} alt="Logo"/>
          </Link>
        </figure>
      </div>

      <ul className="burger__menu" style={
        {
          transform: `translateX(${x}%)`,
          transition: 'transform 0.3s ease-in-out'
        }
      }>
        <li><Link to="/contact">CONTACT</Link></li>
        <li><Link to="/music">MUSIC</Link></li>
        <li>
          <a 
            href="https://open.spotify.com/artist/78DhFNd9KFhRlJCmlcquj4" 
            target="_blank" 
            rel="noopener noreferrer"
            >
              <i className="fab fa-spotify"></i> SPOTIFY
          </a>
        </li>
        <li>
          <a 
            href="https://www.youtube.com/channel/UC0kb_m7TEqeYANFBgDiPRPA" 
            target="_blank" 
            rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i> YOUTUBE
          </a>
        </li>
      </ul>
    </div>
  )
}

export default BurgerMenu;
