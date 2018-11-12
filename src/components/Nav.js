import React from 'react';
import {Link} from 'react-router-dom';

import {links} from '../App';


function Nav() {
  return (
    <nav>
      <ul>
        {
          links.map(item => {
            return (
              <li key={item.name}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}

export default Nav;