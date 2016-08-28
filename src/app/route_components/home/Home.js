import React from 'react';
import './Home.scss';

import HomepageGrid from './components/HomepageGrid/HomepageGrid';

const Home = (props) => {
  return (
    <div id="home" className="page">
      <HomepageGrid />
    </div>
  )
};

export default Home;