import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

import PlayOverlay from '../../../../../../../../general_use/components/Store/PlayOverlay/PlayOverlay';

import './FeaturedStoreAlbum.scss';

const mapStateToProps = ({test}) =>
  ({
    test
  });

const mapDispatchToProps = dispatch =>
  ({});

const FeaturedStoreAlbum = React.createClass({

  render() {
    
    let artistString = Object.keys(this.props.album.album_artists).map((element, index) => {
      if(element === this.props.album.album_artists[Object.keys(this.props.album.album_artists)[Object.keys(this.props.album.album_artists).length - 1]]){
        return <span key={index}>{element}</span>
      }else{
        return <span key={index}>{element}, </span>
      }
    });

    let songRows = this.props.album.album_songs.map((element, index) => {
        if(index < 8) {
          return (
            <tr key={index} className="song">
              <td className="song-details">
                <Link to={"/store/song/"+element.song_url}>{index+1}. {element.song_name}</Link>
                <i className="material-icons">add_shopping_cart</i>
              </td>
              <td className="song-play">
                <i className="material-icons">play_arrow</i>
              </td>
            </tr>
          )
        }
      return null;
    });

    return (
      <div id="FeaturedStoreAlbum" className="col s12 m12 l6">
        <div id="FeaturedStoreAlbumArt">
          <img src={this.props.album.album_image} />
          <PlayOverlay item={this.props.album} />
        </div>
        <div id="FeaturedStoreAlbumDetails">
          <p className="featured-album">Featured Album</p>
          <h4 className="album-title">{this.props.album.album_name}</h4>
          <p className="album-artists truncate">{artistString}</p>
          <table id="AlbumSongs">
            <tbody>
              {songRows}
              {
                this.props.album.album_songs.length > 8
                ?
                  <tr>
                    <td className="more-songs">
                      ...and <strong>{this.props.album.album_songs.length - 8}</strong> more.
                    </td>
                    <td className="song-play">
                    </td>
                  </tr>
                :
                  false
              }

            </tbody>
          </table>
        </div>
      </div>
    )
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedStoreAlbum);