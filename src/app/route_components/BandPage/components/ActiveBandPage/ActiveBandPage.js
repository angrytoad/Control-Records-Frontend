import React from 'react';
import Helmet from 'react-helmet';

import ActiveBandPageBanner from './components/ActiveBandPageBanner/ActiveBandPageBanner';
import ActiveBandPageHeader from './components/ActiveBandPageHeader/ActiveBandPageHeader';
import ActiveBandPageContent from './components/ActiveBandPageContent/ActiveBandPageContent';

import './ActiveBandPage.scss';

const ActiveBandPage = (props) => {
  
  return (
    <div id="ActiveBandPage">
      <Helmet title={props.band.name} />
      <h3 id="ActiveBandPageTitle" className="center-align">{props.band.name}</h3>
      <ActiveBandPageBanner extra={props.band.extra} />
      <ActiveBandPageHeader extra={props.band.extra} />
      <ActiveBandPageContent band={props.band} />
    </div>
  )
};

export default ActiveBandPage;