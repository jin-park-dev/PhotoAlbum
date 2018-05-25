import * as types from '../actions/actionTypes';

export default function photoReducer(state={}, action) {
  switch (action.type) {
    case types.LOAD_PHOTO_SUCCESS:
      console.log(action.photo);
      // create new object?
      return action.photo;

    default:
      return state
  }
}
