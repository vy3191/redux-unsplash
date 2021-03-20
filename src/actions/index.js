export const PENDING_FETCH_PHOTOS = 'PENDING_FETCH_PHOTOS';
export const SUCCESS_FETCH_PHOTOS = 'SUCCESS_FETCH_PHOTOS';
export const REJECTED_FETCH_PHOTOS = 'REJECTED_FETCH_PHOTOS';

const pendingPhotos = () => {
  return {
    type: PENDING_FETCH_PHOTOS
  }
}

const fetchPhotos = (payload) => {
  return {
    type: SUCCESS_FETCH_PHOTOS,
    payload: payload
  }
}

const failPhotos = (payload) => {
  return {
    type: REJECTED_FETCH_PHOTOS,
    payload: payload
  }
}


export const getPhotos = (query) => {

  return (dispatch, getState) => {
    pendingPhotos();
    fetch('url')
      .then(res => res.json())
      .then(data => fetchPhotos(data))
      .catch( err => failPhotos(err))
  }

};
