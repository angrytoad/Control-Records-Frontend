import React from 'react';

import './VolumeDisplay.scss';

const VolumeDisplay = React.createClass({

  modifyVolumeMove(e) {
    if(e.buttons===1) {
      let VolumeDisplay = document.getElementById("VolumeDisplay");
      let offsetLeft = VolumeDisplay.offsetLeft;

      let mouseX = e.clientX;

      let relativeOffset = mouseX - offsetLeft;
      let percentWidth = Math.ceil((100/150)*relativeOffset);
      this.props.onVolumeChange(percentWidth);
    }
  },

  render() {

    let volumeWidth = {
      width: this.props.volume+'%',
    };

    return (
      <div id="VolumeDisplay" onMouseMove={(e) => this.modifyVolumeMove(e)}>
        <div style={volumeWidth} id="CurrentVolume"></div>
        <div id="CurrentVolumeText">{this.props.volume}%</div>
      </div>
    )
  }

});

export default VolumeDisplay;