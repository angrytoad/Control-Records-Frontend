import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = ({test}) =>
  ({
    test
  });

const mapDispatchToProps = dispatch =>
  ({});

const FeaturedStoreAlbum = React.createClass({

  render() {
    return (
      <div id="FeaturedStoreAlbum">
        <h2>Featured Store Album</h2>
      </div>
    )
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedStoreAlbum);