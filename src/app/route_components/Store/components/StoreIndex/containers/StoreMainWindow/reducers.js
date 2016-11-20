

export const featuredStoreInformation = (state, action) => {
  switch ( action.type ) {
    case 'SET_FEATURED_STORE_INFORMATION':
      return action.data;
    default:
      return state || false;
  }
};