import React from 'react';
import './Home.css';

import HomepageGrid from './components/HomepageGrid/HomepageGrid';

const Home = (props) => {
  return (
    <div id="home" className="page">
      <HomepageGrid />
    </div>
  )
};

export default Home;