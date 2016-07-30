import React from 'react';
import './Home.css';

import './logo.png';

import HomepageGrid from '../../page_specific/homepage/components/HomepageGrid/HomepageGrid';

const Home = (props) => {
  return (
    <div id="home" className="page">
      <HomepageGrid />
    </div>
  )
};

export default Home;