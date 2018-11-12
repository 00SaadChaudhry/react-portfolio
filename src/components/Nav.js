import React from 'react';

import {links} from '../App';


function Nav() {
  return (
    <nav>
      <ul>
        {
          links.map(item => {
            return (
              <li key={item.name}>
                <a href={item.path}>{item.name}</a>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}

export default Nav;