import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

import './Menu.scss';

const mapStateToProps = ({}) =>
  ({});

const mapDispatchToProps = dispatch =>
  ({});

const Menu = React.createClass({

  getInitialState() {
    return({
      toggleOpen:false
    })
  },

  handleOpenMenu() {
    console.log('OPEN MENU');
    this.setState({
      toggleOpen:true
    })
  },

  handleCloseMenu() {
    console.log('CLOSE MENU');
    this.setState({
      toggleOpen:false 
    })
  },

  render() {
    return (
      <div id="Menu">
        {
          this.state.toggleOpen
          ?
            <div>
              <div id="nav-icon" className="open" onClick={this.handleCloseMenu}>
                <span> </span>
                <span> </span>
                <span> </span>
              </div>
              <div className="open menu">
                <h5 className="title">MENU</h5>
                <ul className="flow-text">
                  <Link to="/"><li onClick={this.handleCloseMenu}>Homepage</li></Link>
                </ul>
              </div>
            </div>
          :
            <div>
              <div id="nav-icon" onClick={this.handleOpenMenu}>
                <span> </span>
                <span> </span>
                <span> </span>
              </div>
              <div className="closed menu">
                <h5 className="title">MENU</h5>
                <ul className="flow-text">
                  <Link to="/"><li onClick={this.handleCloseMenu}>Homepage</li></Link>
                </ul>
              </div>
            </div>
        }

      </div>
    )
  }
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);