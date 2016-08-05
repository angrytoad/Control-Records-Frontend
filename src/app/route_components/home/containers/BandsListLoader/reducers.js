

export const bands = (state, action) => {
  switch ( action.type ) {
    case 'SAVE_BAND_LIST':
      return action.data;
    default:
      return state || {};
  }
}