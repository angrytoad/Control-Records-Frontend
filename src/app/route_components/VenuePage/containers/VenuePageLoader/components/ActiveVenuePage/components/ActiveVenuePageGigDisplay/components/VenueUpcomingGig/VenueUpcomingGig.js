import React from 'react';
import moment from 'moment';

import './VenueUpcomingGig.scss';

const VenueUpcomingGig = (props) => {
  
  let coordinates = JSON.parse(props.data.venue.coordinates);
  
  return (
    <div className="col s12 m6 l4 VenueUpcomingGig">
      <div>
        <div className="upcoming-gig">
          <div className="upcoming-gig-title center-align">
            <h4>{props.data.band.name}</h4>

          </div>
          <div className="center-align date">
            {moment(props.data.date).format("MMMM Do YYYY @ h:mma")}
          </div>
        </div>
      </div>
    </div>
  )
};

export default VenueUpcomingGig;