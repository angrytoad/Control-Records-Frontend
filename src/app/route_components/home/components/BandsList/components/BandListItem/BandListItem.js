import React from 'react';

import { Link } from 'react-router';

import './BandListItem.scss';

const BandListItem = (props) => {

  console.log(props);

  return (
    <Link to={"/band/"+props.data.band.url_name}>
      <div className="BandListItem valign-wrapper">
        <i className="material-icons right white-text goto">chevron_right</i>
        <h4 className="title">{props.data.band.name}</h4>
      </div>
    </Link>
  )
};

export default BandListItem;