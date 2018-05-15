import * as types from './actionTypes';

export function loadAlbumSuccess(album) {
  return { type: types.LOAD_ALBUM_SUCCESS, album } // album: album
}

function fetchAlbum() {
  return fetch('http://127.0.0.1:8000/api/photo/');
}

export function loadAlbum() {
  // console.log('1. load album called');
  // console.log(fetchAlbum());
  return function(dispatch) {
    // console.log('2. load album called');
    return fetchAlbum().then(album => {
      album.json().then(album => dispatch(loadAlbumSuccess(album)));
    }).catch(error => {
      throw(error);
    })
  }
}
