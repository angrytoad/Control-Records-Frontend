export const venues = (state, action) => {
  switch ( action.type ) {
    case 'UPDATE_VENUES_FROM_API':
      return action.data;
    default:
      return state || [];
  }
};