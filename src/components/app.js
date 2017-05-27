import React from 'react';
import Header from './header';
import Search from './search';

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
      </div>
    );
  }
}

export default App;
