import React from 'react';

import './LatestNews.scss';

import LatestNewsLoader from '../../containers/LatestNewsLoader/LatestNewsLoader.js';

const SocialMediaUpdates = () => {
  return (
    <div id="LatestNews" className="col s12 m12 l4">
      <h3>LATEST NEWS</h3>
      <LatestNewsLoader />
    </div>
  )
};

export default SocialMediaUpdates;