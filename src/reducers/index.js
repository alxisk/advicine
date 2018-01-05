import { combineReducers } from 'redux'
import searchResults from './search'
import titles from './titles'
import collections from './collections'

export default combineReducers({
  searchResults,
  titles,
  collections,
})
