import differenceBy from 'lodash/differenceBy';
import * as actionTypes from '../constants/actionTypes';

const initialState = {
  currentMovies: {},
  bestMovies: {
    isFetching: false,
    pagesLoaded: 0,
    scrollPosition: 0,
    list: [],
  },
};

export default function collections(state = initialState, action) {
  switch (action.type) {
    case actionTypes.REQUEST_CURRENT_MOVIES:
      return {
        ...state,
        currentMovies: {
          isFetching: true,
        },
      };
    case actionTypes.RECIEVE_CURRENT_MOVIES:
      return {
        ...state,
        currentMovies: {
          isFetching: false,
          latestTVShows: action.latestTVShows,
          upcomingMovies: action.upcomingMovies,
        },
      };
    case actionTypes.REQUEST_BEST_MOVIES:
      return {
        ...state,
        bestMovies: {
          isFetching: true,
          pagesLoaded: state.bestMovies.pagesLoaded,
          scrollPosition: state.bestMovies.scrollPosition,
          list: state.bestMovies.list,
        },
      };
    case actionTypes.RECIEVE_BEST_MOVIES:
      return {
        ...state,
        bestMovies: {
          isFetching: false,
          pagesLoaded: state.bestMovies.pagesLoaded + 1,
          scrollPosition: action.scrollPosition,
          list: [
            ...state.bestMovies.list,
            ...differenceBy(action.bestMovies, state.bestMovies.list, 'id'),
          ],
        },
      };
    default:
      return state;
  }
}
