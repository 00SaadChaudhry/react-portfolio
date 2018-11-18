import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

//Array containing react-router-dom data for Link and Route
import {links} from '../App';

function Nav(props) {

  const navLinks = links.map(item => {
    return (
      <li key={item.name}>
        {/*<NavLink exact to={item.path} activeStyle={{textDecoration: 'underline'}}>
          {item.name}
        </NavLink>*/}
        <AnchorLink href={item.path}>
          {item.name}
        </AnchorLink>
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