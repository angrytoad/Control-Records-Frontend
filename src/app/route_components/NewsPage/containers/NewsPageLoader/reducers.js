

export const activeNews = (state, action) => {
  switch ( action.type ) {
    case 'SET_ACTIVE_NEWS':
      return action.data.news;
    case 'RESET_ACTIVE_NEWS':
      return {};
    default:
      return state || {};
  }
};

export const news404 = (state, action) => {
  switch ( action.type ) {
    case 'NEWS_NOT_FOUND':
      return true;
    case 'RESET_ACTIVE_NEWS':
      return false;
    default:
      return state || false;
  }
};
