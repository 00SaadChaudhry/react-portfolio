import React, { Component } from 'react';
import './scss/App.scss';

import Head from './components/Head';
import Foot from './components/Foot';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head />
        <Foot />
      </div>
    );
  }
}

export default App;
