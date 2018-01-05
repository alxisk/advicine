import React from 'react'
import { Route } from 'react-router-dom'
import Header from './header'
import Search from './search'
import CurrentMovies from './currentMovies'
import BestMovies from './bestMovies'
import AdvancedSearch from './advancedSearch'
import SearchResults from './searchResults'
import MoviePage from './moviePage'

const App = () => (
  <div className="container">
    <Header />
    <Search />
    <Route exact path="/" component={CurrentMovies} />
    <Route path="/search" component={SearchResults} />
    <Route path="/advanced-search" component={AdvancedSearch} />
    <Route path="/advanced-search" render={() => <SearchResults advanced />} />
    <Route path="/best-movies" component={BestMovies} />
    <Route path="/titles/:tv?/:title" component={MoviePage} />
  </div>
)

export default App
