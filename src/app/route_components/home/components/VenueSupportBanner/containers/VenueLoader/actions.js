import { endpoint } from '../../../../../../../api.config';

export const updateVenuesFromAPI = (venues) => ({ type:'UPDATE_VENUES_FROM_API', data: venues });

export const loadVenues = () => {
  
  return dispatch => {
    fetch(endpoint+'/venues/all',{
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
        let venues = json.venues;
        dispatch(updateVenuesFromAPI(venues))
      })
      .catch(err => {
        console.log(err);
      })
  }
};