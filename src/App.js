import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import './scss/App.scss';

import Head from './components/Head';
import Foot from './components/Foot';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Head />
          <Foot />
          <Route exact path='/home' component={Home}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
