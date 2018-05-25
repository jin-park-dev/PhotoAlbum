import * as types from './actionTypes';
import * as APIUrls from '../constants/apiUrls';

// Done: Need to get API for photo.
// Each photo page should be supplied pk
// And get it from API end point.

//TODO: TEST LOADPHOTO
//TODO: ADD REDUCER FOR PHOTO

export function loadPhotoSuccess(photo) {
  return { type: types.LOAD_PHOTO_SUCCESS, photo} //photo:photo
}

function fetchPhoto(pk) {
  return fetch(APIUrls.PHOTO_URL + pk);
}

export function loadPhoto(pk) {
  return function(dispatch) {
    return fetchPhoto(pk).then(photo => {
      photo.json().then(photo => dispatch(loadPhotoSuccess(photo)))
    }).catch(error => {
      throw(error);
    })
  }
}
