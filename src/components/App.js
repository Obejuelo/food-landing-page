import React, { Component } from 'react';
import Nav from './nav/Nav';
import Header from './header/Header';
import Welcome from './welcome/Welcome';
import Popular from './popular/Popular';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <Welcome />
        <Popular />
      </div>
    );
  }
}

export default App;
