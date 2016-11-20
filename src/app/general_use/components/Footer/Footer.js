import React from 'react';
import { Link } from 'react-router';

import './Footer.scss';

const Footer = React.createClass({

  render() {
    return (
      <div id="Footer">
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/store"><li>Store</li></Link>
          <Link to="/about-us"><li>Our Story</li></Link>
          <Link to="/contact-us"><li>Sign with us</li></Link>
        </ul>
      </div>
    )
  }

});

export default Footer;