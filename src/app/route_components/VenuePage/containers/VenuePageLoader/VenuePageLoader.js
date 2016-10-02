import React from 'react';
import {connect} from 'react-redux';

import { loadVenuePage, resetVenuePage } from './actions';

import ActiveVenuePage from './components/ActiveVenuePage/ActiveVenuePage';
import Venue404 from './components/Venue404/Venue404';

const mapStateToProps = ({ activeVenue, venue404 }) =>
  ({
    activeVenue,
    venue404
  });

const mapDispatchToProps = dispatch =>
  ({
    loadVenuePage: (venue) => dispatch(loadVenuePage(venue)),
    resetVenuePage: () => dispatch(resetVenuePage())
  });

const VenuePageLoader = React.createClass({
  
  render() {
    return (
      <div>
        { this.props.venue404
          ?
          <Venue404 />
          :
          <ActiveVenuePage venue={this.props.activeVenue} />
        }
      </div>
    )
  },
  
  componentWillMount(){
    if(this.props.activeVenue.url_name !== this.props.url_name){
      this.props.resetVenuePage();
    }
    
    this.props.loadVenuePage(this.props.url_name);
  }
  
});

export default connect(mapStateToProps, mapDispatchToProps)(VenuePageLoader);