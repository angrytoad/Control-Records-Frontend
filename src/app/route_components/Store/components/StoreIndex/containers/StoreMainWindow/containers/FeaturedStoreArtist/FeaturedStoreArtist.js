import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = ({test}) =>
  ({
    test
  });

const mapDispatchToProps = dispatch =>
  ({});

const FeaturedStoreArtist = React.createClass({

  render() {
    return (
      <div id="FeaturedStoreArtist">
        <h2>Featured Store Artist</h2>
      </div>
    )
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedStoreArtist);