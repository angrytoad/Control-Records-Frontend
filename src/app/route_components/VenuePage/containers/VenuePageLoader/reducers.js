
export const activeVenue = (state, action) => {
  switch ( action.type ) {
    case 'SET_ACTIVE_VENUE':
      return action.data.venue;
    case 'RESET_ACTIVE_VENUE':
      return {};
    default:
      return state || {};
  }
};

export const venue404 = (state, action) => {
  switch ( action.type ) {
    case 'VENUE_NOT_FOUND':
      return true;
    case 'RESET_ACTIVE_VENUE':
      return false;
    default:
      return state || false;
  }
};