import React from 'react';

import './BandsList.css';

import BandsListLoader from '../../containers/BandsListLoader/BandsListLoader';

const BandsList = () => {
  return (
    <div id="BandsList" className="col s12 m12 l4">
      <h3>BANDS LIST <small>(a-z)</small></h3>
      <BandsListLoader />
    </div>
  )
};

export default BandsList;