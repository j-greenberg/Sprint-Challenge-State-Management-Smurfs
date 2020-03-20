import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAIL = 'FETCH_SMURFS_FAIL';
export const CREATE_SMURF = 'CREATE_SMURF';

export const getSmurfs = (search) => (dispatch, getState) => {
  dispatch({ type: FETCH_SMURFS_START });
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
        console.log('Smurfs back from server: ', res.data)
        dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data })
    })
    .catch(err => dispatch({ type: FETCH_SMURFS_FAIL, payload: err }));
};

export const createSmurf = (smurf) => (dispatch, getState) => {
  axios
  .post(`http://localhost:3333/smurfs`, smurf)
  .then(res => {
      console.log('Response from POST request: ', res.data)
      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data })
  })
  .catch(err => console.log('error in POST request: ', err));
};

export const deleteSmurf = (id) => (dispatch, getState) => {
  axios
  .delete(`http://localhost:3333/smurfs/${id}`)
  .then(res => {
      console.log('Response from DEL request: ', res.data)
      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data })
  })
  .catch(err => console.log('error in POST request: ', err));
};