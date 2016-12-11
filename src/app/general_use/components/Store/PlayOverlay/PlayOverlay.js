import React from 'react';
import {connect} from 'react-redux';

import { addSongToPlaylist, addAlbumToPlaylist, stopAndClear, setAndPlay } from '../../Player/actions';

import  './PlayOverlay.scss'

const mapStateToProps = ({playlist, playing}) =>
  ({
    playlist,
    playing
  });

const mapDispatchToProps = dispatch =>
  ({
    addSongToPlaylist: (song) => dispatch(addSongToPlaylist(song)),
    addAlbumToPlaylist: (album) => dispatch(addAlbumToPlaylist(album)),
    setAndPlay: (song) => dispatch(setAndPlay(song)),
    stopAndClear: () => dispatch(stopAndClear())
  });

const PlayOverlay = React.createClass({

  handleChangeAndPlay(newContext) {
    this.props.stopAndClear();
    this.props.setAndPlay(newContext);
  },

  handlePlayEvent(item) {
    let found = false;
    if(typeof item.sample_url !== 'undefined'){
      for(let i=0;i<this.props.playlist.length; i++){
        if(this.props.playlist[i].id === item.id){
          found = true;
        }
      }
      if(!found){
        if(this.props.playlist.length === 0){
          this.props.addSongToPlaylist(item);
          this.props.setAndPlay(item);
        }else{
          this.props.addSongToPlaylist(item);
        }
      }else{
        this.handleChangeAndPlay(item);
      }
    }else if(item.album_songs !== 'undefined'){
      let foundSong = item.album_songs[0];
      let alreadyListed = [];
      alreadyListed = Object.assign(alreadyListed, item.album_songs);
      for(let i=0;i<this.props.playlist.length; i++){
        for(let j=0; j<item.album_songs.length; j++){
          if(this.props.playlist[i].id === item.album_songs[j].id){
            alreadyListed[j] = null;
            if(!found){
              found = true;
              foundSong = item.album_songs[j];
            }
          }
        }
      }

      if(!found){
        if(this.props.playlist.length === 0){
          this.props.addAlbumToPlaylist(item);
          this.props.setAndPlay(foundSong);
        }else{
          this.props.addAlbumToPlaylist(item);
        }
      }else{
        for(let i=0;i<alreadyListed.length;i++){
          if(alreadyListed[i] !== null){
            this.props.addSongToPlaylist(alreadyListed[i]);
          }
        }
        this.handleChangeAndPlay(foundSong);
      }
    }
  },

  render() {

    return (
      <div className="PlayOverlay">
        <table>
          <tbody>
            <tr>
              <td><i className="material-icons" onClick={() => this.handlePlayEvent(this.props.item)}>play_arrow</i></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(PlayOverlay);