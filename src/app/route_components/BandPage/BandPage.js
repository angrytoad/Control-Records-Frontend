import React from 'react';

import './BandPage.css';

import BandPageLoader from './containers/BandPageLoader/BandPageLoader';

const BandPage = (props) => {

  return (
    <div id="BandPage" className="page">
      <BandPageLoader url_name={props.params.band_url} />
    </div>
  )
};

export default BandPage;