import React from 'react';

import './ActiveBandPageHeader.scss';

const ActiveBandPageHeader = (props) => {
  return (
    <div id="ActiveBandPageHeader">
      <div id="avatar-wrapper">
        {
          typeof props.extra !== 'undefined'
            ?
            <img id="avatar-image" src={props.extra.avatar_url} />
            :
            false
        }
      </div>
      <div id="non-avatar-wrapper" className="row">
        <div className="col s12">
          <h2>This is just to show the avatar for now</h2>
        </div>
      </div>
    </div>
  )
};

export default ActiveBandPageHeader;