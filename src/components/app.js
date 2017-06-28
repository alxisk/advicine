import React from 'react';
import { Route } from 'react-router-dom';
import Header from './header';
import Search from './search';
import SearchResults from './searchResults';
import MoviePage from './moviePage';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Search />
        <Route path="/search" component={SearchResults} />
        <Route path="/titles/:title" component={MoviePage} />
      </div>
    );
  }
}

export default App;
