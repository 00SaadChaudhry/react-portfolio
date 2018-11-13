import React from 'react';

//FontAwesome icons
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fab} from '@fortawesome/free-brands-svg-icons';
library.add(fab);

const socialMediaArr = [
  {
    link: "https://twitter.com/DoubleOSaad",
    icon: 'twitter'
  },
  {
    link: "https://github.com/00SaadChaudhry",
    icon: 'github'
  }
];

function SocialMedia(props) {
  const socialMediaList = socialMediaArr.map(item => {
    return (
      <li key={item.icon}>
        <a href={item.link} target="_blank"
        rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', item.icon]} />
        </a>
      </li>
    )
  })

  return (
    <div className="SocialMedia">
      <ul>
        {socialMediaList}
      </ul>
    </div>
  )
}

export default SocialMedia;