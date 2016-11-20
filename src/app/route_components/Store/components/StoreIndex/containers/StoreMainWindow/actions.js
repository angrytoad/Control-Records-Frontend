import { endpoint } from '../../../../../../../api.config';


export const setFeaturedStoreInformation = (store) => ({ type:'SET_FEATURED_STORE_INFORMATION', data:store });

export const requestFeaturedStoreInformation = () => {

  return dispatch => {

    fetch(endpoint+'/store/front',{
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
        dispatch(setFeaturedStoreInformation(json));
      })
      .catch(err => {
        console.log(err);
      })
  }
};