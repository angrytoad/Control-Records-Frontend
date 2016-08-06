import React from 'react';
import {connect} from 'react-redux';

import { loadBandPage, resetBandPage } from './actions';

import ActiveBandPage from '../../components/ActiveBandPage/ActiveBandPage';
import Band404 from '../../components/Band404/Band404';

const mapStateToProps = ({ activeBand, band404 }) =>
  ({
    activeBand,
    band404
  });

const mapDispatchToProps = dispatch =>
  ({
    loadBandPage: (band) => dispatch(loadBandPage(band)),
    resetBandPage: () => dispatch(resetBandPage())
  });

const BandPageLoader = React.createClass({

  render() {
    return (
      <div id="BandPageLoader">
        { this.props.band404
          ?
          <Band404 />
          :
          <ActiveBandPage band={this.props.activeBand} />
        }

      </div>
    )
  },

  componentWillMount(){
    /**
     * If we have visited a new band page instead of the last visited page then reset the current active band.
     * This is to ensure that users don't experience a lagging effect where they load a new page
     * but for a brief amount of time old information is shown, this could cause
     * quite a bit of confusion.
     */
    if(this.props.activeBand.url_name !== this.props.url_name){
      this.props.resetBandPage();
    }

    this.props.loadBandPage(this.props.url_name);
  }
  

});

export default connect(mapStateToProps, mapDispatchToProps)(BandPageLoader);