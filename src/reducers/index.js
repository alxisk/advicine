import { combineReducers } from 'redux';
import searchResults from './search';
import titles from './titles';

export default combineReducers({
  searchResults,
  titles
});
