import React from 'react';
import {connect} from 'react-redux';

import './RecentlyPurchased.scss';

const mapStateToProps = ({test}) =>
  ({
    test
  });

const mapDispatchToProps = dispatch =>
  ({});

const RecentlyPurchased = React.createClass({

  render() {
    return (
      <div id="RecentlyPurchased" className="col s12">
        <h2>Recently Purchased Items</h2>
      </div>
    )
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(RecentlyPurchased);