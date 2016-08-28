import React from 'react';

import ActiveBandPageBanner from './components/ActiveBandPageBanner/ActiveBandPageBanner';
import ActiveBandPageHeader from './components/ActiveBandPageHeader/ActiveBandPageHeader';

import './ActiveBandPage.scss';

const ActiveBandPage = (props) => {
  
  return (
    <div id="ActiveBandPage">
      <h3 id="ActiveBandPageTitle" className="center-align">{props.band.name}</h3>
      <ActiveBandPageBanner extra={props.band.extra} />
      <ActiveBandPageHeader extra={props.band.extra} />

    </div>
  )
};

export default ActiveBandPage;