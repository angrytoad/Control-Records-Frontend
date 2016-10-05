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

    const gigs = Object.keys(this.props.gigs).map((element, index) => {
        return <UpcomingGig data={this.props.gigs[index]} key={index}/>
      });


    return (
      <div className="gigs-loader">
        {
          gigs.length > 0
          ?
            <div>
              {gigs}
            </div>
          :
          <p className="flow-text center-align no-gigs">
            <i>Stay tuned for more upcoming gigs!</i>
          </p>
        }

      </div>
    )
  },

  componentDidMount() {
      this.props.loadUpcomingGigs();
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingGigsLoader);