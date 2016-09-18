import React from 'react';
import {connect} from 'react-redux';

import { loadVenues } from './actions';

import './VenueLoader.scss';

import VenueLoaderWrapper from './components/VenueLoaderWrapper/VenueLoaderWrapper';


const mapStateToProps = ({ venues }) =>
  ({
    venues
  });

const mapDispatchToProps = dispatch =>
  ({
    loadVenues: () => dispatch(loadVenues())
  });

const VenueLoader = React.createClass({
  
  render() {
    return (
      <div id="VenueLoader" className="col s12">
        <h4 className="title">Some of Our Supporters</h4>
        <VenueLoaderWrapper venues={this.props.venues} />
      </div>
    )
  },

  componentDidMount() {
    this.props.loadVenues();
  }
  
});

export default connect(mapStateToProps, mapDispatchToProps)(VenueLoader);