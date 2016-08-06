import React from 'react';

const ActiveBandPage = (props) => {
  return (
    <div id="ActiveBandPage">
      <h3 className="white-text center-align">Band: {props.band.name}</h3>
    </div>
  )
};

export default ActiveBandPage;