import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = ({test}) =>
  ({
    test
  });

const mapDispatchToProps = dispatch =>
  ({});

const RecentlyPurchased = React.createClass({

  render() {
    return (
      <div id="RecentlyPurchased">
        <h2>Recently Purchased Items</h2>
      </div>
    )
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(RecentlyPurchased);