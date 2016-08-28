import React from 'react';

import { Link } from 'react-router';

import './Band404.scss';
import './404banner.jpg';

const Band404 = () => {
  return (
    <div id="Band404" className="row valign-wrapper">
      <div className="center-align col s12">
        <div className="Band404Wrapper col s12 m6 offset-m3">
          <h1 className="white-text">Oops!</h1>
          <p className="flow-text white-text">
            The Band that you were looking for doesn't seem to exist, are you sure that you typed it correctly?
          </p>
          <Link to="/">
            <button className="btn btn-large blue-grey darken-3 waves-effect waves-light">Home</button>
          </Link>
        </div>
      </div>
    </div>
  )
};

export default Band404;