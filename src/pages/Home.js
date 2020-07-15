import React from 'react';
import Header from '../components/Header';
import hero from '../assets/static/hero.jpg';

import '../assets/styles/pages/Home.scss';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Header />
      <section className="main">
        <div className="main__hero">
          <img src={ hero }  alt="Background" />
        </div>
        <div className="main__abaut-me" >
          {/* <p>New track coming soon...</p> */}
          <Link to="/contact" > Contact me </Link>
        </div>
      </section>
    </>
  )
}

export default Home;
