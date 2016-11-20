import React from 'react';
import Helmet from 'react-helmet';
import './Home.scss';

import HomepageGrid from './components/HomepageGrid/HomepageGrid';
import Footer from '../../general_use/components/Footer/Footer';

const Home = (props) => {
  return (
    <div id="home" className="page">
      <Helmet title="Premier Music" />
      <HomepageGrid />
      <Footer />
    </div>
  )
};

export default Home;