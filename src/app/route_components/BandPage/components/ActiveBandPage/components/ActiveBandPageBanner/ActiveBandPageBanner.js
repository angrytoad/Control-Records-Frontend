import React from 'react';

import './ActiveBandPageBanner.scss';

const ActiveBandPageBanner = (props) => {

  return (
    <div id="ActiveBandPageBanner">
      <div className="banner-wrapper">
      {
        typeof props.extra !== 'undefined'
          ?
          <div>
            {
              props.extra.banner_url !== null
              ?
                <img id="banner-image" src={props.extra.banner_url} />
              :
                <img id="banner-image" src="/assets/404banner.jpg" />
            }
          </div>
          :
          false

      }
      </div>
    </div>
  )
};

export default ActiveBandPageBanner;