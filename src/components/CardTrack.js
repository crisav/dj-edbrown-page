import React from "react";
import PropTypes from "prop-types";

import '../assets/styles/components/CardTrack.scss';

const Track = ({cover, url}) => {
  return (
    <div className="track">
      <img src={cover} alt="cover" />
      <div className="track__link">
        <a href={url} target="_blank" > <i className="far fa-play-circle"></i> Play now </a>
      </div>
    </div>
  );
};

Track.propTypes = {
  cover: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Track;
