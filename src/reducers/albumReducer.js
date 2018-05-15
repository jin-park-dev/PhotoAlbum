import _ from "lodash";
import * as types from '../actions/actionTypes';

export default function albumReducer(state={}, action) {
  switch (action.type) {
    case types.LOAD_ALBUM_SUCCESS:
      const album = _.mapKeys(action.album, 'pk');
      // console.log('Reducer: LOAD_ALBUM_SUCCESS Reducer');
      // console.log(action.album);
      // console.log(album);
      return album;

    default:
      return state
  }
}
