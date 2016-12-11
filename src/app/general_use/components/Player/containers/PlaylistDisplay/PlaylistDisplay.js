import React from 'react';
import {connect} from 'react-redux';

import PlaylistItem from './PlaylistItem';

import { setPlaying, setPaused, setAudioContext, setAndPlay, stopAndClear, removeFromPlaylist } from '../../actions';

import './PlaylistDisplay.scss';

const mapStateToProps = ({ playlist, audioContext, playing }) =>
  ({
    playlist,
    audioContext,
    playing
  });

const mapDispatchToProps = dispatch =>
  ({
    setPlaying: () => dispatch(setPlaying()),
    setPaused: () => dispatch(setPaused()),
    setAudioContext: (song) => dispatch(setAudioContext(song)),
    setAndPlay: (song) => dispatch(setAndPlay(song)),
    stopAndClear: () => dispatch(stopAndClear()),
    removeFromPlaylist: (itemToRemove) => dispatch(removeFromPlaylist(itemToRemove))
  });

const PlaylistDisplay = React.createClass({

  handleChangeAndPlay(newContext) {
    this.props.stopAndClear();
    this.props.setAndPlay(newContext);
  },

  handleSetPaused() {
    this.props.setPaused();
  },

  handleSetStopped() {
    this.props.stopAndClear();
  },

  handleSetPlaying() {
    this.props.setPlaying();
  },
  
  handlePlayNextSong(itemToRemove) {
    for(let i=0;i<this.props.playlist.length;i++){
      if(this.props.playlist[i].id === itemToRemove.id){ 
        if(i+1 < this.props.playlist.length){
          this.handleChangeAndPlay(this.props.playlist[i+1]);
        }
      }
    }
  },
  
  handleRemoveSong(itemToRemove) {
    if(itemToRemove.id === this.props.audioContext.id){
      this.props.stopAndClear();
      this.handlePlayNextSong(itemToRemove);
      this.props.removeFromPlaylist(itemToRemove);
    }else{
      this.props.removeFromPlaylist(itemToRemove);
    }
  },

  render() {
    
    let items = this.props.playlist.map((element, index) => {
      if(typeof this.props.audioContext.id !== 'undefined' && this.props.audioContext.id === element.id){
        return <PlaylistItem
          key={index}
          item={element}
          active={true}
          playing={this.props.playing}
          onPause={this.handleSetPaused}
          onPlay={this.handleSetPlaying}
          onRemove={this.handleRemoveSong}
        />
      }
      return <PlaylistItem
        key={index}
        item={element}
        active={false}
        playing={this.props.playing}
        onChangeAndPlay={this.handleChangeAndPlay}
        onRemove={this.handleRemoveSong}
      />

    });

    if(this.props.showing){
      return (
        <div id="PlaylistDisplay">
          <h5>Current Playlist</h5>
          <ul>
            {items}
          </ul>
        </div>
      )
    }else{
      return (
        <div id="PlaylistDisplay" className="hidden">
          <h5>Current Playlist</h5>
          <ul>
            {items}
          </ul>
        </div>
      )
    }

  }
  
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistDisplay);