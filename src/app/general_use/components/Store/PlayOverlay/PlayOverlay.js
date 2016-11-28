import React from 'react';
import {connect} from 'react-redux';

import  './PlayOverlay.scss'

const mapStateToProps = ({test}) =>
  ({
    test
  });

const mapDispatchToProps = dispatch =>
  ({});

const PlayOverlay = React.createClass({

  handlePlayEvent() {
    alert('WORKING');
  },

  render() {

    console.log(this.props.item);

    return (
      <div className="PlayOverlay">
        <table>
          <tbody>
            <tr>
              <td><i className="material-icons" onClick={() => this.handlePlayEvent()}>play_arrow</i></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(PlayOverlay);