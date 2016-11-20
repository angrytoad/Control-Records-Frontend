

export const storeSearchResults = (state, action) => {
  switch ( action.type ) {
    case 'SET_SEARCH_RESULTS':
      return action.data;
    case 'SET_NO_SEARCH_RESULTS':
      return false;
    default:
      return (typeof state !== 'undefined' ? state : false);
  }
};

export const storeSearchLoading = (state, action) => {
  switch ( action.type ) {
    case 'SET_STORE_SEARCH_LOADING':
      return true;
    case 'SET_STORE_SEARCH_NOT_LOADING':
      return false;
    default:
      return (typeof state !== 'undefined' ? state : false);
  }
}