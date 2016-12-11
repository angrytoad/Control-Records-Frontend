import React from 'react';

import PlayOverlay from '../../../../../../../../general_use/components/Store/PlayOverlay/PlayOverlay';

import './RecentAlbumUploads.scss';

const RecentAlbumUploads = React.createClass({

  render() {
    

    let albums = this.props.albums.map((element, index) => {
      return (
        <li key={index}>
          <div className="album-image">
            <img src={element.album_image_url} />
          </div>
          <div className="album-details">
            <div className="valign">
              <h5>{element.album_name}</h5>
              <p>{element.artist_name} <i className="material-icons">navigate_next</i></p>
            </div>
          </div>
          <PlayOverlay item={element} />
        </li>
      )
    });

    return (
      <div id="RecentAlbumUploads">
        <ul>
          {albums}
        </ul>
      </div>
    )
  }

});

export default RecentAlbumUploads;