import React from 'react';

const links = [
  {
    path: '/',
    name: 'Home'
  },
  {
    path: '/aboutme',
    name: 'About Me'
  },
  {
    path: '/skills',
    name: 'Skills'
  },
  {
    path: '/development',
    name: 'Development'
  },
  {
    path: '/contact',
    name: 'Contact'
  }
];


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