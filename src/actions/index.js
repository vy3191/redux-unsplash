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
  return (dispatch) => {
    pendingPhotos();
    fetch(`https://api.unsplash.com/search/photos?page=1&query=${query}`, {
        method: 'GET',
        headers: {
          Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`,
        }
    })
    .then(res => res.json())
    .then(data => {
        dispatch(fetchPhotos(data.results))
    })
    .catch( err => dispatch(failPhotos(err)))
  }
};
