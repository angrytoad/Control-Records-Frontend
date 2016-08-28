import React from 'react';
import {connect} from 'react-redux';

import './UpcomingGigsLoader.scss';

import { loadUpcomingGigs } from './actions.js';

import UpcomingGig from '../../components/UpcomingGigs/components/UpcomingGig/UpcomingGig.js';

const mapStateToProps = ({gigs}) =>
  ({
    gigs: gigs
  });

const mapDispatchToProps = dispatch =>
  ({
    loadUpcomingGigs: () => dispatch(loadUpcomingGigs())
  });

const UpcomingGigsLoader = React.createClass({

  render() {
    const gigs = Object.keys(this.props.gigs).map((ele, index) => {
        return <UpcomingGig data={this.props.gigs[ele]} key={index} />
    });
    return (
      <div className="gigs-loader">
        {gigs}
      </div>
    )
  },

  componentDidMount() {
      this.props.loadUpcomingGigs();
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingGigsLoader);