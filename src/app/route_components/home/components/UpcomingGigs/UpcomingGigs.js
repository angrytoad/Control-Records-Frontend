import React from 'react';

import './UpcomingGigs.scss';

import UpcomingGigsLoader from '../../containers/UpcomingGigsLoader/UpcomingGigsLoader';

const UpcomingGigs = () => {
  return (
    <div id="upcoming-gigs" className="col s12 m12 l4 white-text">
      <h3>UPCOMING GIGS</h3>
      <UpcomingGigsLoader />
    </div>
  )
};

export default UpcomingGigs;