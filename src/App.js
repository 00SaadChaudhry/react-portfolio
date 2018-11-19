import React, { Component } from 'react';
import {HashRouter, Route} from 'react-router-dom';

import './scss/App.scss';

import Head from './components/Head';
import Foot from './components/Foot';

import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Development from './components/Development';
import Skills from './components/Skills';
import Contact from './components/Contact';
import TopBtn from './components/TopBtn';

export const links = [
  {
    path: '#home',
    component: Home,
    name: 'Home'
  },
  {
    path: '#aboutme',
    component: AboutMe,
    name: 'About Me'
  },
  {
    path: '#skills',
    component: Skills,
    name: 'Skills'
  },
  {
    path: '#development',
    component: Development,
    name: 'Development'
  },
  {
    path: '#contact',
    component: Contact,
    name: 'Contact'
  }
];

class App extends Component {
  render() {
    return (
      <HashRouter>
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
          <Home />
          <TopBtn />
          <AboutMe />
          <Skills />
          <Development />
          <Contact />
          <Foot />
        </div>
      </HashRouter>
    );
  }
}

export default App;
