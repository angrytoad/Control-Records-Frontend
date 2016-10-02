import { endpoint } from '../../../../../api.config';

export const setActiveVenue = venue => ({ type: 'SET_ACTIVE_VENUE', data: venue});
export const showVenue404 = () => ({ type: 'VENUE_NOT_FOUND' });
export const resetVenuePage = () => ({ type: 'RESET_ACTIVE_VENUE' });

export const loadVenuePage = (news_url) => {

  return dispatch => {

    fetch(endpoint+'/venue/'+news_url,{
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
        dispatch(setActiveVenue(json))
      })
      .catch(err => {
        console.log(err);
        dispatch(showVenue404())
      })
  }
};
