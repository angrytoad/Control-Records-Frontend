import React from 'react';

import './ActiveBandPageContentUpcomingGigs.scss';
import UpcomingGig from './components/UpcomingGig/UpcomingGig';

const ActiveBandPageContentUpcomingGigs = (props) => {

    const gigs = Object.keys(props.band.gigs).map((ele, index) => {
      return <UpcomingGig data={props.band.gigs[ele]} band={props.band} key={index}/>
    });

    return (
      <div id="ActiveBandPageContentUpcomingGigs">
        <div className="gig-wrapper">
          {gigs}
        </div>
      </div>
    )
};

export default ActiveBandPageContentUpcomingGigs;