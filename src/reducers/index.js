import { combineReducers } from 'redux';
import searchResults from './search';
import titles from './titles';
import currentMovies from './currentMovies';

export default combineReducers({
  searchResults,
  titles,
  currentMovies,
});
