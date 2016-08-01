




export const gigs = (state, action) => {
  switch ( action.type ) {
    case 'SAVE_UPCOMING_GIGS':
      return action.data;
    default:
      return state || {};
  }
}