import React from 'react';
import moment from 'moment';

import './UpcomingGig.scss';

const UpcomingGig = (props) => {

  let coordinates = JSON.parse(props.data.venue.coordinates);
  
  return (
    <div className="row">
      <div className="col s12">
        <div className="upcoming-gig">
          <div className="upcoming-gig-title center-align">
            <h4>{props.data.venue.venue_name}</h4>
            <p className="flow-text">
              {
                typeof props.data.additional !== 'undefined'
                  ?
                  props.data.additional
                  :
                  false
              }
            </p>
          </div>
          <div className="center-align date">
            {moment(props.data.date).format("MMMM Do YYYY @ h:mma")}
          </div>
          <div className="center-align directions">
            <a href={"https://www.google.com/maps/place/"+coordinates.latitude+"+"+coordinates.longitude+"/@"+coordinates.latitude+","+coordinates.longitude+",15z"} target="_blank">(Directions)</a>
          </div>
        </div>
      </div>
    </div>
  )
};

export default UpcomingGig;