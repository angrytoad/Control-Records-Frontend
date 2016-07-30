import React from 'react';

import './HomepageBanner.css';

const HomepageBanner = () => {
  return (
    <div id="homepage-banner" className="col s12 m12 l12 no-padding">
      <video id="banner-video" autoPlay="true" loop>
        <source src="assets/music.mp4" type="video/mp4" />
      </video>
      <h1 id="banner-title" className="white-text">CONTROL RECORDS</h1>
    </div>
  )
};

export default HomepageBanner;