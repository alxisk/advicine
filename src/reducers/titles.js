import * as actionTypes from '../constants/actionTypes';

export default function titles(state = {}, action) {
  switch (action.type) {
    case actionTypes.REQUEST_TITLE_DATA:
      return {
        ...state,
        [action.id]: { isFetching: true },
      };
    case actionTypes.RECIEVE_TITLE_DATA:
      return {
        ...state,
        [action.id]: {
          ...action.details,
          isFetching: false,
          videos: action.videos,
        },
      };
    default:
      return state;
  }
}
