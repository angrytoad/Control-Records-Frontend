


export const playlist = (state, action) => {
  switch ( action.type ) {
    case 'EMPTY_PLAYLIST':
      return [];
    case 'ADD_SONG_TO_PLAYLIST':
      return [...state, action.data];
    case 'ADD_ALBUM_TO_PLAYLIST':
      return [...state, action.data];
    case 'REMOVE_SONG_FROM_PLAYLIST':
      let removeIndex = false;
      
      for(let index=0; index < state.length; index++){
        if(state[index].id === action.data.id){
          removeIndex = index;
        }
      }

      if(removeIndex !== false){
        if(state.length > 1){
          return [
            ...state.slice(0, removeIndex),
            ...state.slice(removeIndex + 1)
          ];
        }
        return [];
      }
      return state;
    default:
      return state || [];
  }
};

export const audioContext = (state, action) => {
  switch ( action.type ) {
    case 'SET_AUDIO_CONTEXT':
      return action.data;
    case 'CLEAR_AUDIO_CONTEXT':
      return {};
    default:
      return state || {}
  }
};

export const playing = (state, action) => {
  switch ( action.type ) {
    case 'SET_PLAY':
      return true;
    case 'SET_PAUSE':
      return false;
    case 'SET_STOP':
      return false;
    default:
      return state || false;
  }
};