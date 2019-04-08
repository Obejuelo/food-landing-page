import React, { Component } from 'react';
import Nav from './nav/Nav';
import Header from './header/Header';
import Welcome from './welcome/Welcome';
import Popular from './popular/Popular';
import Footer from './footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <Welcome />
        <Popular />
        <Footer />
      </div>
    );
  }
}

export default App;
