import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAIL,
    CREATE_SMURF
  } from '../actions/mainActions';

export const initialState = {
    smurfs: [{name: '', age: '', height: '', id: ''}],
    error: '',
    isFetching: false
}; 

  function mainReducer(state = initialState, action) {
    console.log('reducer', action);
    switch (action.type) {
      case FETCH_SMURFS_START:
        return {
          ...state,
          isFetching: true,
          error: ''
        };
      case FETCH_SMURFS_SUCCESS:
        return {
          ...state,
          smurfs: action.payload,
          isFetching: false,
          error: ''
        };
      case FETCH_SMURFS_FAIL:
        return {
          ...state,
          error: action.payload
        };
       case CREATE_SMURF:
        return{
            ...state, 
            smurfs: action.payload
        }
      default:
        return state;
    }
  }
  
  export default mainReducer;