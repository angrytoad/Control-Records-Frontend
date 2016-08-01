import React from 'react';
import moment from 'moment';

import './UpcomingGig.css';

const UpcomingGig = (props) => {
  console.log(props.data);
  return (
    <div className="upcoming-gig col s12 flow-text">
      <div className="upcoming-gig-title center-align">
          <h4>{props.data.band}</h4>
          <p className="flow-text">
            {props.data.gig.additional}
          </p>
      </div>
      <div className="center-align date">
        {moment(props.data.gig.date).format("dddd, MMMM Do YYYY @ h:mma")}
      </div>
      <div className="center-align venue">
        {props.data.venue.name}
      </div>
      <div className="center-align directions">
        <a href={"https://www.google.com/maps/place/"+props.data.venue.coordinates.latitude+"+"+props.data.venue.coordinates.longitude+"/@"+props.data.venue.coordinates.latitude+","+props.data.venue.coordinates.longitude+",15z"} target="_blank">(Directions)</a>
      </div>
    </div>
  )
};

export default UpcomingGig;