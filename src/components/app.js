import React from 'react';
import { Route } from 'react-router-dom';
import Header from './header';
import Search from './search';
import CurrentMovies from './currentMovies';
import SearchResults from './searchResults';
import MoviePage from './moviePage';

const App = () => (
  <div className="container">
    <Header />
    <Search />
    <Route exact path="/" component={CurrentMovies} />
    <Route path="/search" component={SearchResults} />
    <Route path="/titles/:title" component={MoviePage} />
  </div>
);

export default App;
