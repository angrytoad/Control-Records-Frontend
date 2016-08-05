import React from 'react';

import './BandListItem.css';

const BandListItem = (props) => {

  return (
    <div className="BandListItem valign-wrapper">
      <i className="material-icons right white-text goto">chevron_right</i>
      <h4 className="title">{props.data.band.name}</h4>
    </div>
  )
};

export default BandListItem;