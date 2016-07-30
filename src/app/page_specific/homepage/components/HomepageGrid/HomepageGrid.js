import React from 'react';

import './music.mp4';
import './HomepageGrid.css';

import HomepageBanner from '../HomepageBanner/HomepageBanner';
import UpcomingGigs from '../UpcomingGigs/UpcomingGigs';
import HomepageMediaGallery from '../HomepageMediaGallery/HomepageMediaGallery';
import SocialMediaUpdates from '../SocialMediaUpdates/SocialMediaUpdates';

const HomepageGrid = () => {
  return (
    <div className="row">
      <HomepageBanner />

      <UpcomingGigs />
      <SocialMediaUpdates />
      <HomepageMediaGallery />
    </div>
  )
};

export default HomepageGrid;