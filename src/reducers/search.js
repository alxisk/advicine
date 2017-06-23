import * as actionTypes from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  results: null
};

export default function searchResults(state = initialState, action) {
  switch (action.type) {
    case actionTypes.REQUEST_SEARCH_RESULTS:
      console.log('requesting search results...');
      return {
        isFetching: true
      };
    case actionTypes.RECIEVE_SEARCH_RESULTS:
      console.log('search results recieved');
      return {
        isFetching: false,
        results: action.results
      };
    default:
      return state;
  }
}
