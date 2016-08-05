



import { endpoint } from '../../../../../api.config';

export const saveBandList = bands => ({ type: 'SAVE_BAND_LIST', data: bands});

export const loadBandList = () => {

  return dispatch => {
    fetch(endpoint+'/bands/all',{
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
        let bands = json.bands;
        dispatch(saveBandList(bands))
      })
      .catch(err => {
        console.log(err);
      })
  }
};