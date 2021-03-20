
import { PENDING_FETCH_PHOTOS, 
  SUCCESS_FETCH_PHOTOS,
  REJECTED_FETCH_PHOTOS
} from '../actions'


const initialState = {
  loading: false,
  photos: [],
  error: {}
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case PENDING_FETCH_PHOTOS:
      return {
        ...state,
        loading: true,
        error: {}
      }
    case SUCCESS_FETCH_PHOTOS:
      return {
        ...state,
        loading: false,
        photos: action.payload,
        error: {}
      }  
    case REJECTED_FETCH_PHOTOS:
      return {
        ...state,
        photos: [],
        loading: false,
        error: action.payload
      }   

    default:
      return state;
  }
  
  
}

export default reducer;