

import { endpoint } from '../../../../../api.config';

export const saveLatestNews = articles => ({ type: 'SAVE_LATEST_NEWS', data: articles});

export const loadLatestNews = () => {

  return dispatch => {
    fetch(endpoint+'/news/all',{
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
        let articles = json.articles;
        dispatch(saveLatestNews(articles))
      })
      .catch(err => {
        console.log(err);
      })
  }
};