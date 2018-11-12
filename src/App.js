import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import './scss/App.scss';

import Head from './components/Head';
import Foot from './components/Foot';

import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Development from './components/Development';
import Skills from './components/Skills';
import Contact from './components/Contact';

export const links = [
  {
    path: '/',
    component: Home,
    name: 'Home'
  },
  {
    path: '/aboutme',
    component: AboutMe,
    name: 'About Me'
  },
  {
    path: '/skills',
    component: Skills,
    name: 'Skills'
  },
  {
    path: '/development',
    component: Development,
    name: 'Development'
  },
  {
    path: '/contact',
    component: Contact,
    name: 'Contact'
  }
];

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Head />
          
          {
            links.map(item =>{
              return(
                <Route exact path={item.path} component={item.component}
                key={item.name} />
              )
            })
          }
          <Foot />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
