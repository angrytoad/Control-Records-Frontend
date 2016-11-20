import { endpoint } from '../../../../../../../api.config';

export const setSearchResults = (results) => ({ type:'SET_SEARCH_RESULTS', data:results });
export const setNoSearchResults = () => ({ type:'SET_NO_SEARCH_RESULTS' });

export const setLoading = () => ({ type:'SET_STORE_SEARCH_LOADING' });
export const setNotLoading = () => ({ type:'SET_STORE_SEARCH_NOT_LOADING' });

export const makeStoreSearch = (search) => {

  return dispatch => {

    dispatch(setLoading());


    fetch(endpoint+'/store/search/'+search,{
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
        dispatch(setSearchResults(json));
        dispatch(setNotLoading());
      })
      .catch(err => {
        dispatch(setNoSearchResults());
        dispatch(setNotLoading());
      })
  }
};