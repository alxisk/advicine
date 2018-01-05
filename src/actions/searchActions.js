import * as actionTypes from '../constants/actionTypes'
import tmdbApi from '../utils/tmdbApi'

export function requestSearchResults() {
  return {
    type: actionTypes.REQUEST_SEARCH_RESULTS,
  }
}

export function recieveSearchResults(results) {
  return {
    type: actionTypes.RECIEVE_SEARCH_RESULTS,
    results,
  }
}

export const fetchSearchResults = query => dispatch => {
  dispatch(requestSearchResults())
  return tmdbApi.getTitles(query).then(json => dispatch(recieveSearchResults(json)))
}

export function requestAdvancedSearchResults() {
  return {
    type: actionTypes.REQUEST_ADVANCED_SEARCH_RESULTS,
  }
}

export function recieveAdvancedSearchResults(results) {
  return {
    type: actionTypes.RECIEVE_ADVANCED_SEARCH_RESULTS,
    results,
  }
}

export const fetchAdvancedSearchResults = (date, genres, lang, runtime) => dispatch => {
  dispatch(requestAdvancedSearchResults())
  return tmdbApi
    .getAdvSearchResults(date, genres, lang, runtime)
    .then(json => dispatch(recieveAdvancedSearchResults(json)))
}
