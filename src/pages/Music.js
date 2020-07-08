import React from 'react';
import Header from '../components/Header';
import CardTrack from '../components/CardTrack';

import { tracks } from '../data/tracks';
import '../assets/styles/pages/Music.scss';


const Music = () => {
  return (
    <section className="music">
      <Header />
      <h1> Released </h1>
      <div className="music__tracks" >
        {
          tracks.map((item) => (
            <CardTrack 
              key={item.id}
              {...item}
            />
          ))
        }
      </div>
    </section>
  )
}

export default Music;
