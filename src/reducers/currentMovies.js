import * as actionTypes from '../constants/actionTypes';

const initialState = {
  isFetching: false,
};

export default function currentMovies(state = initialState, action) {
  switch (action.type) {
    case actionTypes.REQUEST_CURRENT_MOVIES:
      return {
        isFetching: true,
      };
    case actionTypes.RECIEVE_CURRENT_MOVIES:
      return {
        isFetching: false,
        latestTVShows: action.latestTVShows,
        upcomingMovies: action.upcomingMovies,
      };
    default:
      return state;
  }
}
