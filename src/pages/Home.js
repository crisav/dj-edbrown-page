import React from 'react';
import Header from '../components/Header';
import hero from '../assets/static/hero.jpg';

import '../assets/styles/pages/Home.scss';

const Home = () => {
  return (
    <>
      <div className="header__container">
        <Header />
      </div>
      <section className="main">
        <div className="main__hero">
            <img src={ hero }  alt="Background" />
        </div>
        <div className="main__abaut-me" >
          <p>Cooming soon </p>
          <a href="#">About me</a>
        </div>
      </section>
      
    </>
  )
}

export default Home;
