import React from 'react';

import './VenuePage.scss';

import VenuePageLoader from './containers/VenuePageLoader/VenuePageLoader';

const VenuePage = (props) => {
  return (
    <div id="VenuePage">
      <VenuePageLoader url_name={props.params.venue_url} />
    </div>
  )
};

export default VenuePage;