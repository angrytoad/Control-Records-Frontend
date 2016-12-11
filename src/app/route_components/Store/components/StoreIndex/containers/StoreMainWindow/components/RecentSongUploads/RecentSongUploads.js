import React from 'react';

import './RecentSongUploads.scss';
import PlayOverlay from '../../../../../../../../general_use/components/Store/PlayOverlay/PlayOverlay'; 

const RecentSongUploads = React.createClass({
  
  render() {
    

    let songs = this.props.songs.map((element, index) => {
        return (
          <li key={index} className="valign-wrapper"> 
            <div className="valign">
              <div className="song-image">
                {
                  element.artist_avatar !== false
                  ?
                    <img src={element.artist_avatar} />
                  :
                    <img src='/assets/404avatar.png' />
                }
                <PlayOverlay item={element} />
              </div>
              <div className="song-details valign-wrapper">
                <div className="valign">
                  <h5>{element.song_name}</h5>
                  <p>{element.artist_name} <i className="material-icons">navigate_next</i></p>
                </div>
              </div>
            </div>
          </li>
        )
    });

    return (
      <div id="RecentSongUploads">
        <ul>
          {songs}
        </ul>
      </div>
    )
  }
  
});

export default RecentSongUploads;