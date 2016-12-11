import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

import PlayOverlay from '../../../../../../../../general_use/components/Store/PlayOverlay/PlayOverlay';

import { addSongToPlaylist, addAlbumToPlaylist, setAndPlay, stopAndClear } from '../../../../../../../../general_use/components/Player/actions';

import './FeaturedStoreAlbum.scss';

const mapStateToProps = ({playlist}) =>
  ({
    playlist
  });

const mapDispatchToProps = dispatch =>
  ({
    addSongToPlaylist: (song) => dispatch(addSongToPlaylist(song)),
    addAlbumToPlaylist: (album) => dispatch(addAlbumToPlaylist(album)),
    setAndPlay: (song) => dispatch(setAndPlay(song)),
    stopAndClear: () => dispatch(stopAndClear()),
  });

const FeaturedStoreAlbum = React.createClass({

  handleChangeAndPlay(newContext) {
    this.props.stopAndClear();
    this.props.setAndPlay(newContext);
  },

  handlePlayEvent(item) {
    let found = false;
    if(typeof item.sample_url !== 'undefined') {
      for (let i = 0; i < this.props.playlist.length; i++) {
        if (this.props.playlist[i].id === item.id) {
          found = true;
        }
      }
      if (!found) {
        if (this.props.playlist.length === 0) {
          this.props.addSongToPlaylist(item);
          this.props.setAndPlay(item);
        } else {
          this.props.addSongToPlaylist(item);
        }
      } else {
        this.handleChangeAndPlay(item);
      }
    }
  },

  render() {
    
    let artistString = Object.keys(this.props.album.album_artists).map((element, index) => {
      if(element === this.props.album.album_artists[Object.keys(this.props.album.album_artists)[Object.keys(this.props.album.album_artists).length - 1]]){
        return <span key={index}>{element}</span>
      }else{
        return <span key={index}>{element}, </span>
      }
    });

    let songRows = this.props.album.album_songs.map((element, index) => {
        if(index < 6) {
          return (
            <tr key={index} className="song">
              <td className="song-details">
                <Link to={"/store/song/"+element.url_safe_name}>{index+1}. {element.song_name}</Link>
                <i className="material-icons">add_shopping_cart</i>
              </td>
              <td className="song-play" onClick={() => this.handlePlayEvent(element)}>
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
                this.props.album.album_songs.length > 6
                ?
                  <tr>
                    <td className="more-songs">
                      ...and <strong>{this.props.album.album_songs.length - 6}</strong> more.
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