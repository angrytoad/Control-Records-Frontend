import React from 'react';
import Helmet from 'react-helmet';
import './Home.scss';

import HomepageGrid from './components/HomepageGrid/HomepageGrid';

const Home = (props) => {
  return (
    <div id="home" className="page">
      <Helmet title="Premier Music" />
      <HomepageGrid />
    </div>
  )
};

export default Home;