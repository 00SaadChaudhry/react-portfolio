import React, {Component} from 'react';
import {Link} from 'react-router-dom';

//Array containing react-router-dom data for Link and Route
import {links} from '../App';

//FontAwesome icons
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
library.add(faBars);

/*function handleClick() {
  console.log('clicked');
}*/

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked:'not clicked'
    };
  }
  handleClick() {
    this.setState.clicked = 'clicked';
    console.log(this.state.clicked);
  }
  render() {

    const navLinks = links.map(item => {
        return <li key={item.name}><Link to={item.path}>{item.name}</Link></li>
      });
  
    return (
      <nav className="Nav">
        <button onClick={this.handleClick.bind(this)}>
          <FontAwesomeIcon icon={faBars} className="menu" />
        </button>
        <ul>
          {navLinks}
        </ul>
      </nav>
    )
  }
}

export default Nav;