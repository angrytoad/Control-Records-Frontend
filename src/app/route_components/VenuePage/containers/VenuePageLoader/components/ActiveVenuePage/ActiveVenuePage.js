import React from 'react';
import Helmet from 'react-helmet';

import './ActiveVenuePage.scss';

import ActiveVenuePageGigDisplay from './components/ActiveVenuePageGigDisplay/ActiveVenuePageGigDisplay';
import VenueMapsDisplay from './components/VenueMapsDisplay/VenueMapsDisplay';

const ActiveVenuePage = (props) => {

  return (
    <div id="ActiveVenuePage">
      <Helmet
        title={props.venue.name}
        meta={[
          {'property':'og:type', 'content':'article'},
          {'property':'og:title', 'content':'Gigs at '+props.venue.name},
          {'property':'og:description', 'content':'Find recent gigs at '+props.venue.name+' and get directions'},
          {'property':'og:image', 'content':props.venue.logo}
        ]}
      />
      {
        typeof props.venue.logo !== 'undefined'
        ?
          <div>
            {
              props.venue.logo.length > 0
              ?
                <img className="venue-page-logo" src={props.venue.logo} />
              :
                false
            }
          </div>
        :
          false
      }

      <h2 id="ActiveVenuePageTitle" className="center-align">{props.venue.name}</h2>
      <div className="container" id="ActiveVenuePageContent">
        {
          typeof props.venue.gigs !== 'undefined'
          ?
            <div>
              <ActiveVenuePageGigDisplay gigs={props.venue.gigs} />
            </div>
          :
            false
        }
      </div>
      {
        typeof props.venue.gigs !== 'undefined'
          ?
          <div>
            <h3 className="title">Find us</h3>
            <VenueMapsDisplay venue={props.venue} />
          </div>
        :
          false
      }
    </div>
  )
};

export default ActiveVenuePage;