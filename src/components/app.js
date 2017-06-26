import React from 'react';
import { Route } from 'react-router-dom';
import Header from './header';
import Search from './search';

import SearchResults from './searchResults';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }
  render() {
    return (
      <div className="container">
        <Header />
        <Search />
        <Route path="/search" component={SearchResults} />
      </div>
    );
  }
}

export default App;
