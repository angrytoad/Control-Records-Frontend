import React from 'react';
import Helmet from 'react-helmet';

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
                <div>
                  <Helmet
                    meta={[
                      {'property':'og:image', 'content':props.extra.banner_url}
                    ]}
                  />
                  <img id="banner-image" src={props.extra.banner_url} />
                </div>
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