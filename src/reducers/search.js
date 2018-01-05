import * as actionTypes from '../constants/actionTypes'

const initialState = {
  isFetching: false,
  results: null,
  advSearchResults: null,
}

export default function searchResults(state = initialState, action) {
  switch (action.type) {
    case actionTypes.REQUEST_SEARCH_RESULTS:
      return {
        ...state,
        isFetching: true,
      }
    case actionTypes.RECIEVE_SEARCH_RESULTS:
      return {
        ...state,
        isFetching: false,
        results: action.results,
      }
    case actionTypes.REQUEST_ADVANCED_SEARCH_RESULTS:
      return {
        ...state,
        isFetching: true,
      }
    case actionTypes.RECIEVE_ADVANCED_SEARCH_RESULTS:
      return {
        ...state,
        isFetching: false,
        advSearchResults: action.results,
      }
    default:
      return state
  }
}
