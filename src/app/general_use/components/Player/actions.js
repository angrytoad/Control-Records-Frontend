
export const addSongToPlaylist = (song) => ({ type: 'ADD_SONG_TO_PLAYLIST', data: song });
export const removeSongFromPlaylist = (song) => ({ type: 'REMOVE_SONG_FROM_PLAYLIST', data:song });
export const setPlaying = () => ({ type: 'SET_PLAY' });
export const setPaused = () => ({ type: 'SET_PAUSE' });
export const setStopped = () => ({ type: 'SET_STOP' });

export const setAudioContext = (context) => ({ type: 'SET_AUDIO_CONTEXT', data: context });
export const clearAudioContext = () => ({ type: 'CLEAR_AUDIO_CONTEXT' });

export const addAlbumToPlaylist = (album) => {
  return dispatch => {
    console.log(album);
    for(let index=0; index < album.album_songs.length; index++){
      dispatch(addSongToPlaylist(album.album_songs[index]));
    }
  }
};

export const removeFromPlaylist = (itemToRemove) => {
  return dispatch => {
    dispatch(removeSongFromPlaylist(itemToRemove))
  }
};

export const stopAndClear =  () => {
  return dispatch => {
    dispatch(setStopped());
    dispatch(clearAudioContext());
  }
};

export const setAndPlay = (song) => {
  return dispatch => {
    dispatch(setAudioContext(song));
    dispatch(setPlaying());
  }
};

export const songFinished = (nextSong) => {
  return dispatch => {
    dispatch(stopAndClear());
    dispatch(setAndPlay(nextSong));
  };
};


