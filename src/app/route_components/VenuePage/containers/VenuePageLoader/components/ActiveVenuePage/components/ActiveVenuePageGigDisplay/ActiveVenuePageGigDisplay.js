import React from 'react';

import VenueUpcomingGig from './components/VenueUpcomingGig/VenueUpcomingGig';

import './ActiveVenuePageGigDisplay.scss';

const ActiveVenuePageGigDisplay = (props) => {
  
  const gigs = props.gigs.map((element, index) => {
    return <VenueUpcomingGig data={props.gigs[index]} key={index}/>
  });

  return (
    <div id="ActiveVenuePageGigDisplay">
      {
        gigs.length > 0
        ?
          <div className="row">
            {gigs}
          </div>
        :
          <p className="flow-text center-align white-text">
            There aren't any gigs booked at this venue yet. Please check back at a later date.
          </p>
      }

    </div>
  )
};

export default ActiveVenuePageGigDisplay;