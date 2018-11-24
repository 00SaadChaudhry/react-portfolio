//node packages
import React, { Component } from 'react';
import {HashRouter, Route} from 'react-router-dom';

//styling
import './scss/App.scss';

import Head from './components/Head';
import Foot from './components/Foot';
import TopBtn from './components/TopBtn';

//main content
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Development from './components/Development';
import Skills from './components/Skills';
import Contact from './components/Contact';

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

    function makeHdr(title) {
      return <h1>{title}</h1>
    }

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
          <AboutMe header={makeHdr('About Me')}/>
          <Skills header={makeHdr('Skills')}/>
          <Development header={makeHdr('Development')} />
          <Contact header={makeHdr('Contact')} />
          <Foot />
        </div>
      </HashRouter>
    );
  }
}

export default App;
