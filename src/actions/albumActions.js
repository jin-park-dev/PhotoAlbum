import * as types from './actionTypes';
import * as APIUrls from '../constants/apiUrls';

export function loadAlbumSuccess(album) {
  return { type: types.LOAD_ALBUM_SUCCESS, album } // album: album
}

function fetchAlbum(pk) {
  return fetch(APIUrls.ALBUM_URL + pk);
}

export function loadAlbum(pk) {
  // console.log('1. load album called');
  // console.log(fetchAlbum());
  return function(dispatch) {
    // console.log('2. load album called');
    return fetchAlbum(pk).then(album => {
      album.json().then(album => dispatch(loadAlbumSuccess(album)));
    }).catch(error => {
      throw(error);
    })
  }
}
