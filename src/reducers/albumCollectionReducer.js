import _ from "lodash";
import * as types from '../actions/actionTypes';

export default function albumCollectionReducer(state={}, action) {
  switch (action.type) {
    case types.LOAD_ALBUM_COLLECTION_SUCCESS:
      const albumCollection = _.mapKeys(action.albumCollection, 'pk');
      // console.log('Reducer: LOAD_ALBUM_COLLECTION_SUCCESS Reducer');
      // console.log(action.albumCollection);
      // console.log(albumCollection);
      return albumCollection;

    default:
      return state
  }
}
