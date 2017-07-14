import * as actionTypes from '../constants/actionTypes';
import tmdbApi from '../utils/tmdbApi';

export function requestCurrentMovies() {
  return {
    type: actionTypes.REQUEST_CURRENT_MOVIES,
  };
}

export function recieveCurrentMovies(latestTVShows, upcomingMovies) {
  return {
    type: actionTypes.RECIEVE_CURRENT_MOVIES,
    latestTVShows,
    upcomingMovies,
  };
}

export const fetchCurrentMovies = () => (dispatch) => {
  dispatch(requestCurrentMovies());
  const latestTVShows = tmdbApi.getLatestTVShows();
  const upcomingMovies = tmdbApi.getUpcoming();
  return Promise.all([latestTVShows, upcomingMovies])
    .then(
      responses => dispatch(recieveCurrentMovies(responses[0], responses[1]))
    );
};
