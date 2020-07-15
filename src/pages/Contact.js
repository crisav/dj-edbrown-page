import React from 'react';
import Header from '../components/Header';

import img from '../assets/static/IMG_1629.jpg';
import '../assets/styles/pages/Contact.scss';

const Contact = () => {
  return (
    <>
      <Header />
      <section className="contact" >
        <img src={img} alt="dj-edbroen" />
        <div className="contact__description">
          <div>
            <h2>About me</h2>
            <p>Ed brown is a Colombian Dj from Bogotá city. When he was 9 years old stared to play instruments by himself as the guitar and piano, at the age of 16 he began to study music production and became a beat maker 4 years later. He was 21 years old when he introduced himself into the “DJ” campus, making his own tracks and beats to share with other people, being a “HOLY FIT” festival headliner.  He’s keeping compromising with producing music and mixing new generes.</p>
          </div>
          <div className="contact__description--social">
            <h2>Contact me</h2>
            <ul>
              <li>  
                <a 
                  href="https://www.instagram.com/edbrowndj/?igshid=lqxfvjhk3do3" 
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram-square"></i> Instagram 
                </a>
              </li>
              <li>  
                <a 
                  href="mailto:edbrownmusicofficial@gmail.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  > 
                    <i className="fas fa-at"></i>                  edbrownmusicofficial@gmail.com       
                </a>  
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
