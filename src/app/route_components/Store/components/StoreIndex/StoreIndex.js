import React from 'react';

import StoreSearch from './containers/StoreSearch/StoreSearch';
import StoreMainWindow from './components/StoreMainWindow/StoreMainWindow';

const StoreIndex = React.createClass({

  render() {
    return (
      <div id="StoreIndex">
        <StoreSearch />
        <StoreMainWindow />
      </div>
    )
  }

});

export default StoreIndex;