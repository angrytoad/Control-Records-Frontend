import React from 'react';
import { browserHistory } from 'react-router';

import  './LinkOverlay.scss'

const LinkOverlay = React.createClass({

  handleLinkEvent() {
    browserHistory.push(this.props.link);
  },

  render() {

    return (
      <div className="LinkOverlay">
        <table>
          <tbody>
            <tr>
              <td><i className="material-icons" onClick={() => this.handleLinkEvent()}>link</i></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

});

export default LinkOverlay;