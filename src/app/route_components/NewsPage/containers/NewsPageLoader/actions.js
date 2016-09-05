import { endpoint } from '../../../../../api.config';

export const setActiveNews = news => ({ type: 'SET_ACTIVE_NEWS', data: news});
export const showNews404 = () => ({ type: 'NEWS_NOT_FOUND' });
export const resetNewsPage = () => ({ type: 'RESET_ACTIVE_NEWS' });

export const loadNewsPage = (news_url) => {

  return dispatch => {

    fetch(endpoint+'/news/'+news_url,{
      method:'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if(!res.ok){
          throw Error(res.statusText);
        }
        return res;
      })
      .then(res => res.json())
      .then(json => {
        dispatch(setActiveNews(json))
      })
      .catch(err => {
        dispatch(showNews404())
      })
  }
};
