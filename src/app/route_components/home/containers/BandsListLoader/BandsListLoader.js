import React from 'react';
import {connect} from 'react-redux';

import { loadBandList } from './actions';

import BandListItem from '../../components/BandsList/components/BandListItem/BandListItem';

const mapStateToProps = ({ bands }) =>
  ({
    bands
  });

const mapDispatchToProps = dispatch =>
  ({
    loadBandList: () => dispatch(loadBandList())
  });

const BandListLoader = React.createClass({
  
  render() {
    const bands = Object.keys(this.props.bands).map((ele, index) => {
      return <BandListItem data={this.props.bands[ele]} key={index} />
    });
    return (
      <div id="BandListLoader">
        {bands}
      </div>
    )
  },

  componentDidMount() {
    this.props.loadBandList();
  }
  
});

export default connect(mapStateToProps, mapDispatchToProps)(BandListLoader);
