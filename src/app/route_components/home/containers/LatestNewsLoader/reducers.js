

export const news = (state, action) => {
  switch ( action.type ) {
    case 'SAVE_LATEST_NEWS':
      return action.data;
    default:
      return state || {};
  }
}
