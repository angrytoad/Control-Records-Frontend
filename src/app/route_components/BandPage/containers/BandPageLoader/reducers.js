

export const activeBand = (state, action) => {
  switch ( action.type ) {
    case 'SET_ACTIVE_BAND':
      return action.data.band;
    case 'RESET_ACTIVE_BAND':
      return {};
    default:
      return state || {};
  }
}

export const band404 = (state, action) => {
  switch ( action.type ) {
    case 'BAND_NOT_FOUND':
      return true;
    case 'RESET_ACTIVE_BAND':
      return false;
    default:
      return state || false;
  }
}
