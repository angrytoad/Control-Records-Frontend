import React from 'react';

import './ActiveBandPageBanner.scss';

const ActiveBandPageBanner = (props) => {
  return (
    <div id="ActiveBandPageBanner">
      <div className="banner-wrapper">
      {
        typeof props.extra !== 'undefined'
          ?
          <img id="banner-image" src={props.extra.banner_url} />
          :
          false
      }
      </div>
    </div>
  )
};

export default ActiveBandPageBanner;