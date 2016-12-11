import React from 'react';
import {connect} from 'react-redux';

import { setPlaying, setPaused, setAudioContext, setAndPlay, stopAndClear } from './actions';

import AudioContext from './containers/AudioContext/AudioContext';
import PlaylistDisplay from './containers/PlaylistDisplay/PlaylistDisplay';
import VolumeDisplay from './containers/VolumeDisplay/VolumeDisplay';

import './Player.scss';

const mapStateToProps = ({ playlist, playing,  audioContext }) =>
  ({
    playlist,
    playing,
    audioContext
  });

const mapDispatchToProps = dispatch =>
  ({
    setPlaying: () => dispatch(setPlaying()),
    setPaused: () => dispatch(setPaused()),
    setAudioContext: (song) => dispatch(setAudioContext(song)),
    setAndPlay: (song) => dispatch(setAndPlay(song)),
    stopAndClear: () => dispatch(stopAndClear())
  });

const Player = React.createClass({

  getInitialState() {
    return({
      playlistShowing: false,
      volume: 75,
    })
  },

  togglePlaylistShowing() {
    if(this.state.playlistShowing){
      this.setState({ playlistShowing: false });
    }else{
      this.setState({ playlistShowing: true });
    }
  },
  
  setPlaying() {
    if(typeof this.props.audioContext.sample_url === 'undefined'){
      this.props.setAndPlay(this.props.playlist[0]);
    }else{
      this.props.setPlaying();
    }
  },

  handleChangeAndPlay(newContext) {
    this.props.stopAndClear();
    this.props.setAndPlay(newContext);
  },
  
  setPaused() {
    this.props.setPaused();
  },

  setStopped() {
    this.props.stopAndClear();
  },
  
  handleSetVolume(volume) {
    this.setState({
      volume: volume
    })
  },

  render() {

    if(this.props.playlist.length > 0) {
      return (
        <div id="Player" className="row">
          <AudioContext volume={this.state.volume} />
          <div id="MainControlWrapper" className="col s12 m5">
            <div className="left-controls">
              {
                this.props.playing
                ?
                  <i title="Pause" className="material-icons" onClick={() => this.setPaused()}>pause</i> 
                :
                  <i title="Play" className="material-icons" onClick={() => this.setPlaying()}>play_arrow</i>
              }
              <i title="Stop" className="material-icons" onClick={() => this.setStopped()}>stop</i>
              <VolumeDisplay volume={this.state.volume} onVolumeChange={this.handleSetVolume} />
            </div>
            <div className="right-controls">
              <div id="playlist-icon" onClick={() => this.togglePlaylistShowing()}>
                {
                  this.state.playlistShowing
                  ?
                    <span title="Hide Playlist">
                      <i className="material-icons" >featured_play_list</i>
                      <i className="material-icons">close</i>
                    </span>
                  :
                    <i title="Show Playlist" className="material-icons">featured_play_list</i>
                }
              </div>
            </div>
          </div>
          <PlaylistDisplay showing={this.state.playlistShowing} />
        </div>
      );
    }else{
      return (
        <div id="Player" className="hidden">
          <AudioContext />
        </div>
      );
    }
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(Player);