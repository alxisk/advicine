import * as actionTypes from '../constants/actionTypes';
import tmdbApi from '../utils/tmdbApi';

export function requestSearchResults() {
  return {
    type: actionTypes.REQUEST_SEARCH_RESULTS,
    isFetching: true
  };
}

export function recieveSearchResults(results) {
  return {
    type: actionTypes.RECIEVE_SEARCH_RESULTS,
    results
  };
}

export const fetchSearchResults = query => (dispatch) => {
  dispatch(requestSearchResults());
  return tmdbApi.getTitles(query)
    .then(
      json => dispatch(recieveSearchResults(json))
    );
};
