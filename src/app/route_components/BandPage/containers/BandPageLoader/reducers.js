

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
