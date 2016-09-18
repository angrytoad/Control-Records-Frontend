import React from 'react';

import './music.mp4';
import './HomepageGrid.scss';

import HomepageBanner from '../HomepageBanner/HomepageBanner';
import UpcomingGigs from '../UpcomingGigs/UpcomingGigs';
import BandsList from '../BandsList/BandsList';
import LatestNews from '../LatestNews/LatestNews';
import VenueSupportBanner from '../VenueSupportBanner/VenueSupportBanner';

const HomepageGrid = () => {
  return (
    <div className="row">
      <HomepageBanner />
      <VenueSupportBanner />
      <BandsList />
      <UpcomingGigs />
      <LatestNews />
    </div>
  )
};

export default HomepageGrid;