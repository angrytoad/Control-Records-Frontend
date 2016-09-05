import React from 'react';
import { Link } from 'react-router';

import './News404.scss';

const News404 = () => {
  return (
    <div id="News404" className="row valign-wrapper">
      <div className="center-align col s12">
        <h2>We couldn't find that news article.</h2>
        <Link to="/" className="flow-text">
          <button className="btn btn-large">
            Go Back?
          </button>
        </Link>
      </div>
    </div>
  )
};

export default News404;
