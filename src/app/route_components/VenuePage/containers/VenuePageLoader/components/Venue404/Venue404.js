import React from 'react';
import { Link } from 'react-router';

import './Venue404.scss';

const Venue404 = () => {
  return (
    <div id="Venue404" className="row valign-wrapper">
      <div className="center-align col s12">
        <h2>We couldn't find that venue.</h2>
        <Link to="/" className="flow-text">
          <button className="btn btn-large">
            Go Back?
          </button>
        </Link>
      </div>
    </div>
  )
};

export default Venue404;