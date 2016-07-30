import React from 'react';

import './music.mp4';
import './HomepageGrid.css';

import HomepageBanner from '../HomepageBanner/HomepageBanner';


const HomepageGrid = () => {
  return (
    <div className="row">
      <HomepageBanner />
      <div className="col s12 m6 l4 red">
        <h4>Column 1</h4>
      </div>
      <div className="col s12 m6 l4 blue">
        <h4>Column 2</h4>
      </div>
      <div className="col s12 m12 l4 green">
        <h4>Column 3</h4>
      </div>
    </div>
  )
};

export default HomepageGrid;