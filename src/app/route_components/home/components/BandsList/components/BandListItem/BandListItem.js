import React from 'react';

import { Link } from 'react-router';

import './BandListItem.scss';

const BandListItem = (props) => {

  console.log(props);

  return (
    <Link to={"/band/"+props.data.band.url_name}>
      <div className="BandListItem valign-wrapper">
        {
          props.data.band.avatar.length > 0
            ?
            <img className="band-list-avatar goto right" src={props.data.band.avatar} />
            :
            <img className="band-list-avatar goto right" src="/assets/404avatar.png" />
        }
        <h4 className="title">

          {props.data.band.name}
        </h4>
      </div>
    </Link>
  )
};

export default BandListItem;