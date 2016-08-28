import React from 'react';

import './BandsList.scss';

import BandsListLoader from '../../containers/BandsListLoader/BandsListLoader';

const BandsList = () => {
  return (
    <div id="BandsList" className="col s12 m12 l4">
      <h3>
        BANDS LIST
        <div>(a-z)</div>
      </h3>
      <BandsListLoader />
    </div>
  )
};

export default BandsList;