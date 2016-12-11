import React from 'react';
import {connect} from 'react-redux';
import ReactHowler from 'react-howler';
import moment from 'moment';

import { songFinished, stopAndClear, setAndPlay } from '../../actions';

const mapStateToProps = ({ playlist, playing, audioContext }) =>
  ({
    audioContext,
    playing,
    playlist
  });

const mapDispatchToProps = dispatch =>
  ({
    songFinished: (nextSong) => dispatch(songFinished(nextSong)),
    stopAndClear: () => dispatch(stopAndClear()),
    setAndPlay: (nextContext) => dispatch(setAndPlay(nextContext))
  });

const AudioContext = React.createClass({

  getInitialState () {
    return ({
      seekWidth: 0,
      looping: false
    });
  },

  handleSongFinished () {
    if(!this.state.looping){
      for(let index=0; index<this.props.playlist.length; index++){
        let element = this.props.playlist[index];
        if(this.props.audioContext.id === element.id){
          if(index === this.props.playlist.length-1){
            this.props.stopAndClear();
          }else{
            console.log('GET NEXT SONG');
            let nextSong = this.props.playlist[index+1];
            this.props.songFinished(nextSong);
            break;
          }
        }
      }
    }
  },
  
  getSeek () {
    console.log(this.audio.seek());
  },

  setSeek (seekWidth) {
    this.audio.seek((this.audio.duration()/100)*seekWidth);
  },

  handleCheckSeekState() {
    let seekChecker = setInterval(() => {
      if(this.audio !== null){
        let seekWidth = ((100/this.audio.duration())*this.audio.seek());
        this.setState({
          seekWidth: seekWidth
        })
      }else{
        clearInterval(seekChecker);
      }
    },100);
  },

  modifySeekMove(e) {
    if(e.buttons===1) {
      let Seeker = document.getElementById("seeker");
      let offsetLeft = Seeker.offsetLeft;

      let mouseX = e.clientX;

      let relativeOffset = mouseX - offsetLeft;
      let percentWidth = Math.ceil((100/Seeker.offsetWidth)*relativeOffset);
      this.setSeek(percentWidth);
    }
  },

  handleToggleLooping(){
    if(this.state.looping){
      this.setState({
        looping:false
      });
    }else{
      this.setState({
        looping:true
      });
    }
  },

  handleChangeAndPlay(newContext) {
    this.props.stopAndClear();
    this.props.setAndPlay(newContext);
  },

  handleSkipPrevious() {
    for(let index=0;index<this.props.playlist.length;index++){
      if(this.props.playlist[index].id === this.props.audioContext.id){
        if(index === 0){
          this.handleChangeAndPlay(this.props.playlist[this.props.playlist.length-1]);
        }else{
          this.handleChangeAndPlay(this.props.playlist[index-1]);
        }
      }
    }
  },

  handleSkipNext() {
    for(let index=0;index<this.props.playlist.length;index++){
      if(this.props.playlist[index].id === this.props.audioContext.id){
        if(index === this.props.playlist.length-1){
          this.handleChangeAndPlay(this.props.playlist[0]);
        }else{
          this.handleChangeAndPlay(this.props.playlist[index+1]);
        }
      }
    }
  },

  render() {

    let seekWidth = {
      width: this.state.seekWidth+'%',
    };

    return (
      <div id="AudioContext" className="col s12 m7">
        <div id="track-information">
          {
            typeof this.props.audioContext.song_name !== 'undefined'
            ?
              <p className="col s8 song-info">
                {this.props.audioContext.song_name} by {this.props.audioContext.artist_name}
                {
                  typeof this.props.audioContext.song_album !== 'undefined'
                    ?
                    <strong> [{this.props.audioContext.song_album}]</strong>
                    :
                    false
                }
              </p>
              :
              <p className="col s8">
                Waiting for song selection
              </p>
          }
          <div className="col s4 skip-controls">
            <i className="material-icons" onClick={() => this.handleSkipPrevious()}>skip_previous</i>
            {
              this.state.looping
              ?
                <i className="material-icons active" onClick={() => this.handleToggleLooping()}>loop</i>
              :
                <i className="material-icons" onClick={() => this.handleToggleLooping()}>loop</i>
            }
            <i className="material-icons" onClick={() => this.handleSkipNext()}>skip_next</i>
          </div>
        </div>
        <div id="seeker" onMouseMove={(e) => this.modifySeekMove(e)} onTouchMove={(e) => this.modifySeekMove(e)}>
          <div id="seeker-bar" style={seekWidth}></div>
        </div>
        {
          typeof this.audio !== 'undefined' && this.audio !== null
          ?
            <div id="track-timing" className="right-align">
              {
                !isNaN(this.audio.seek())
                ?
                  <span>
                    { moment().startOf('day').seconds(this.audio.seek()).format("m:ss")}/{ moment().startOf('day').seconds(this.audio.duration()).format("m:ss")}
                  </span>
                :
                  <span>
                    00:00/00:00
                  </span>
              }

            </div>
          :
            <div id="track-timing" className="right-align">
              00:00/00:00
            </div>
        }
        {
          typeof this.props.audioContext.sample_url !== 'undefined'
          ?
            <ReactHowler
              src={this.props.audioContext.sample_url}
              playing={this.props.playing}
              ref={(ref) => this.audio = ref}
              onEnd={this.handleSongFinished}
              onPlay={this.handleCheckSeekState}
              loop={this.state.looping}
              volume={parseFloat((this.props.volume/100).toPrecision(2),10)}
            />
          :
            false
        }

      </div>
    )
  }
  
});

export default connect(mapStateToProps, mapDispatchToProps)(AudioContext);