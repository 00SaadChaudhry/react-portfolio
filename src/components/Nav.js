import React from 'react';
import {NavLink} from 'react-router-dom';

//Array containing react-router-dom data for Link and Route
import {links} from '../App';

function Nav(props) {

  const navLinks = links.map(item => {
    return (
      <li key={item.name}>
        <NavLink exact to={item.path} activeStyle={{textDecoration: 'underline'}}>
          {item.name}
        </NavLink>
      </li>)
  });

  return (
    <nav className={props.className}>
      <ul>
        {navLinks}
      </ul>
    </nav>
  )
  
}

export default Nav;