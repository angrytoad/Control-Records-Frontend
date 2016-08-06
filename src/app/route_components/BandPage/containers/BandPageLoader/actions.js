
import { endpoint } from '../../../../../api.config';

export const setActiveBand = band => ({ type: 'SET_ACTIVE_BAND', data: band});
export const showBand404 = () => ({ type: 'BAND_NOT_FOUND' });
export const resetBandPage = () => ({ type: 'RESET_ACTIVE_BAND' });

export const loadBandPage = (band_url) => {

  return dispatch => {
    fetch(endpoint+'/bands/'+band_url,{
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
        dispatch(setActiveBand(json))
      })
      .catch(err => {
        dispatch(showBand404())
      })
  }
};

