import React from 'react';

import './ActiveBandPageHeader.scss';
import './404avatar.png';

const ActiveBandPageHeader = (props) => {
  return (
    <div id="ActiveBandPageHeader">
      <div id="avatar-wrapper">
        {
          typeof props.extra !== 'undefined'
            ?
            <div>
              {
                props.extra.avatar_url !== null
                ?
                  <img id="avatar-image" src={props.extra.avatar_url} />
                :
                  <img id="avatar-image" src="/assets/404avatar.png" />
              }
            </div>

            :
            false
        }
      </div>
    </div>
  )
};

export default ActiveBandPageHeader;