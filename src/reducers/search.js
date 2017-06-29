import * as actionTypes from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  results: null,
};

export default function searchResults(state = initialState, action) {
  switch (action.type) {
    case actionTypes.REQUEST_SEARCH_RESULTS:
      return {
        isFetching: true,
      };
    case actionTypes.RECIEVE_SEARCH_RESULTS:
      return {
        isFetching: false,
        results: action.results,
      };
    default:
      return state;
  }
}
