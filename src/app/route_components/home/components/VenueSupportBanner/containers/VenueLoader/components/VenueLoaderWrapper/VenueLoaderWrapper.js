import React from 'react';
import { Link } from 'react-router';

import './VenueLoaderWrapper.scss';

const VenueLoaderWrapper = React.createClass({

  render() {

    let venues = this.props.venues.map((element, index) => {

        let background = {
          backgroundImage: (element.logo.length > 0 ? 'url(' + element.logo + ')' : 'url(/assets/404banner.jpg)')
        };

        return <li key={index} className="valign-wrapper">
          <Link to={"/venue/"+element.url_safe_name}>
          {
            element.logo.length > 0
            ?
              <div className="venue-carriage valign-wrapper" style={background}>
                <span className="valign">{element.name}</span>
              </div>
            :
              <div className="venue-carriage valign-wrapper no-logo" style={background}>
                <span className="valign">{element.name}</span>
              </div>
          }
          </Link>
        </li>
    });

    return (
      <div id="VenueLoaderWrapper" className="center-align row">
        {
          this.props.venues.length > 0
          ?
            <ul className="col s12">
              {venues}
            </ul>
          :
            <p className="flow-text">
              Loading...
            </p>
        }
      </div>
    )
  }

});

export default VenueLoaderWrapper;