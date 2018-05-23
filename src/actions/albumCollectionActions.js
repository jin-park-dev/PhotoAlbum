import * as types from './actionTypes';
import * as APIUrls from '../constants/apiUrls';

export function loadAlbumCollectionSuccess(albumCollection) {
  return { type: types.LOAD_ALBUM_COLLECTION_SUCCESS, albumCollection } // albumCollection: albumCollection
}

function fetchAlbumCollection() {
  return fetch(APIUrls.ALBUM_URL);
}

export function loadAlbumCollection() {
  // console.log('1. load albums collections called');
  // console.log(fetchAlbum());
  return function(dispatch) {
    // console.log('2. load albums collections called');
    return fetchAlbumCollection().then(albumCollection => {
      albumCollection.json().then(albumCollection => dispatch(loadAlbumCollectionSuccess(albumCollection)));
    }).catch(error => {
      throw(error);
    })
  }
}
