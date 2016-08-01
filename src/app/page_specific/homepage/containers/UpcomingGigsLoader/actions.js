

import { endpoint } from '../../../../../api.config';

export const saveUpcomingGigs = gigs => ({ type: 'SAVE_UPCOMING_GIGS', data: gigs});

export const loadUpcomingGigs = () => {

  return dispatch => {
    fetch(endpoint+'/gigs',{
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
        let gigs = json.gigs;
        dispatch(saveUpcomingGigs(gigs))
      })
      .catch(err => {
        console.log(err);
      })
  }
};