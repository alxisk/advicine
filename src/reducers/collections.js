import * as actionTypes from '../constants/actionTypes';

const initialState = {
  currentMovies: {},
};

export default function collections(state = initialState, action) {
  switch (action.type) {
    case actionTypes.REQUEST_CURRENT_MOVIES:
      return {
        currentMovies: {
          isFetching: true,
        },
      };
    case actionTypes.RECIEVE_CURRENT_MOVIES:
      return {
        currentMovies: {
          isFetching: false,
          latestTVShows: action.latestTVShows,
          upcomingMovies: action.upcomingMovies,
        },
      };
    default:
      return state;
  }
}
