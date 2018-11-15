import React, {Component} from 'react';

import Logo from './Logo';
import Nav from './Nav';

//FontAwesome icons
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
library.add(faBars);

class Head extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true
    };
  }
  handleClick() {
    this.setState({toggle: !this.state.toggle});
  }

  render() {

    const toggle = this.state.toggle;

    return (
      <header className="Head">
        <Logo />
        <button onClick={this.handleClick.bind(this)}>
          <FontAwesomeIcon icon={faBars} className="menu" />
        </button>
        <Nav className={toggle ? 'nav-closed' : 'nav-open'} />
      </header>
    )
  }
}

export default Head;