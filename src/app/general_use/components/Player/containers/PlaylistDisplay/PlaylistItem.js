import React from 'react';

const PlaylistItem = React.createClass({

  render() {


    if(this.props.active){
      return (
        <li className="PlaylistItem active">
          <div>
            {
              this.props.playing
                ?
                <i
                  title="Pause"
                  className="material-icons"
                  onClick={() => this.props.onPause()}
                >pause</i>
                :
                <i
                  title="Play"
                  className="material-icons"
                  onClick={() => this.props.onPlay()}
                >play_arrow</i>
            }
            {this.props.item.song_name}
            <i
              className="material-icons remove-icon"
              title="Remove From Playlist"
              onClick={() => this.props.onRemove(this.props.item)}
            >remove_from_queue</i>
          </div>
        </li>
      )
    }else{
      return (
        <li className="PlaylistItem">
          <div>
            <i
            title="Play"
            className="material-icons"
            onClick={() => this.props.onChangeAndPlay(this.props.item)}
            >play_arrow</i>
            {this.props.item.song_name}
            <i
              className="material-icons remove-icon"
              title="Remove From Playlist"
              onClick={() => this.props.onRemove(this.props.item)}
            >remove_from_queue</i>
          </div>
        </li>
      )
    }
  }

});

export default PlaylistItem;